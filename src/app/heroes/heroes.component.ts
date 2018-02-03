import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; // Heroクラスをインポート
import {HEROES } from '../mock-heroes';

// @Componentは、コンポーネントのAngularメタデータを指定するデコレータ関数
@Component({
  selector: 'app-heroes', // コンポーネントのCSS要素セレクタ
  templateUrl: './heroes.component.html', // コンポーネントのテンプレートファイルの場所
  styleUrls: ['./heroes.component.css'] // コンポーネントのプライベートCSSスタイルの場所 
})



export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

