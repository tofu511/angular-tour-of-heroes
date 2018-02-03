import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; // Heroクラスをインポート

// @Componentは、コンポーネントのAngularメタデータを指定するデコレータ関数
@Component({
  selector: 'app-heroes', // コンポーネントのCSS要素セレクタ
  templateUrl: './heroes.component.html', // コンポーネントのテンプレートファイルの場所
  styleUrls: ['./heroes.component.css'] // コンポーネントのプライベートCSSスタイルの場所 
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit() {
  }

}
