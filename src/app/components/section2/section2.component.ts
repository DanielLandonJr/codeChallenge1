import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss']
})
export class Section2Component implements OnInit {
  carbSliderValue: number = 0;
  proteinSliderValue: number = 0;
  fatSliderValue: number = 0;
  totalValue: number = 0;

  constructor() { };

  ngOnInit() {
    this.totalValues();
  };

  fatSlider = (value) => {
    this.fatSliderValue = value;
    this.totalValues();
  };

  proteinSlider = (value) => {
    this.proteinSliderValue = value;
    this.totalValues();
  };

  carbSlider = (value) => {
    this.carbSliderValue = value;
    this.totalValues();
  };

  totalValues = () => {
    this.totalValue = Number(this.carbSliderValue) + Number(this.proteinSliderValue) + Number(this.fatSliderValue);
  };

  ratioPresets = () => {
    console.log('Ratio Presets Clicked ...');
  };

}
