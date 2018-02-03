import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; // Heroクラスをインポート
import { HeroService } from '../hero.service';

// @Componentは、コンポーネントのAngularメタデータを指定するデコレータ関数
@Component({
  selector: 'app-heroes', // コンポーネントのCSS要素セレクタ
  templateUrl: './heroes.component.html', // コンポーネントのテンプレートファイルの場所
  styleUrls: ['./heroes.component.css'] // コンポーネントのプライベートCSSスタイルの場所 
})



export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes : Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}

