import { formatCurrency } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit ,Component, OnInit, Renderer2 } from '@angular/core';


declare const $ : any

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.css']
})
export class ForexComponent implements OnInit, AfterViewInit {
  private _table1 : any;

  constructor(private renderer : Renderer2, private http : HttpClient) { }

  ngAfterViewInit(): void {
    this.renderer.removeClass(document.body, "sidebar-open");
    this.renderer.addClass(document.body, "sidebar-closed");

    this._table1 = $("#table1").DataTable
    (
      {
        "columnsDefs" :
        [
          {
            "targets" : 2,
            "className" : "text-right"
          }
        ]
      }
    );
    this.getData();
  }

  ngOnInit(): void {
  }
  getData(): void {
    console.log("getData()");

    var url = "https://openexchangerates.org/api/latest.json?app_id=5afb351bd42b47e7b92af0504a83e73e";

    this.http.get(url)
    .subscribe((data : any) => {
      console.log(data);

      var rates = data.rates;
      console.log(rates);

      var idr = rates.IDR;
      var idr2 = formatCurrency(idr, "en-US", "", "USD");
      console.log("USD : " + idr2);
      var row = [1, "USD", idr2];
      this._table1.row.add(row);

      var sgd = rates.IDR / rates.SGD;
      var sgd2 = formatCurrency(sgd, "en-US", "", "SGD");
      console.log("SGD : " + sgd2);
      var row = [2, "SGD", sgd2];
      this._table1.row.add(row);

      var bnd = rates.IDR / rates.BND;
      var bnd2 = formatCurrency(bnd, "en-US", "", "BND");
      console.log("BND : " + bnd2);
      var row = [3, "BND", bnd2];
      this._table1.row.add(row);

      var hkd = rates.IDR / rates.HKD;
      var hkd2 = formatCurrency(hkd, "en-US", "", "HKD");
      console.log("HKD : " + hkd2);
      var row = [4, "HKD", hkd2];
      this._table1.row.add(row);

      var btc = rates.IDR / rates.BTC;
      var btc2 = formatCurrency(btc, "en-US", "", "BTC");
      console.log("BTC : " + btc2);
      var row = [5, "BTC", btc2];
      this._table1.row.add(row);

      var afn = rates.IDR/ rates.AFN;
      var afn2 = formatCurrency(afn, "en-US", "", "AFN");
      console.log("AFN : " + afn2);
      var row = [6, "AFN", afn2];
      this._table1.row.add(row);

      var bam = rates.IDR/ rates.BAM;
      var bam2 = formatCurrency(bam, "en-US", "", "BAM");
      console.log("BAM : " + bam2);
      var row = [7, "BAM", bam2];
      this._table1.row.add(row);

      var jpy = rates.IDR/ rates.JPY;
      var jpy2 = formatCurrency(jpy, "en-US", "", "JPY");
      console.log("JPY : " + jpy2);
      var row = [8, "JPY", jpy2];
      this._table1.row.add(row);

      var qar = rates.IDR/ rates.QAR;
      var qar2 = formatCurrency(qar, "en-US", "", "QAR");
      console.log("QAR : " + qar2);
      var row = [9, "QAR", qar2];
      this._table1.row.add(row);

      var rsd = rates.IDR/ rates.RSD;
      var rsd2 = formatCurrency(rsd, "en-US", "", "RSD");
      console.log("RSD : " + rsd2);
      var row = [10, "RSD", rsd2];
      this._table1.row.add(row);

      this._table1.draw(false);

    });
  }


}
