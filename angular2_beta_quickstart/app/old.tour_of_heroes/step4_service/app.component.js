System.register(['angular2/core', './hero-detail.component', './hero.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hero_detail_component_1, hero_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            /*
                [class.selected]="..." , [value]="..." is property/attribute binding
                (click)=".." , (change)="..." , (eventName)="..."  is for event handler
                * before *ngFor or before *ngIf means "master template" for cuurent tag (<li> or <div>)
                ngIf and ngFor are called “structural directives” because they can change the structure of portions of the DOM
                # before hero means local variable of current template
                
                HeroDetailComponent is declared as directive and used with
                <my-hero-detail  [hero]="selectedHero" ></my-hero-detail> where hero is a property of HeroDetailComponent (declared in inputs)
                
                HeroService is declared in "providers" list of @Component metadata (so it is candidate for injection)
                injection occurs here in constructor
                ngOnInit() of OnInit interface is a angular2 lifeCycle init method (like @PostConstruct in java/jee)
            */
            AppComponent = (function () {
                function AppComponent(_heroService) {
                    this._heroService = _heroService;
                    this.title = 'Tour of Heroes';
                    //keep it simple (don't retreive data at this early stage)
                    //ngOnInit() of OnInit LifeCycle interface is a better stage
                    //the "_" first character is a convention for private property name
                }
                ;
                AppComponent.prototype.fetchHeroes = function () {
                    var _this = this;
                    // (pre version without Promise):   this.heroes = this._heroService.getHeroes();
                    this._heroService.getHeroesPromise().then(function (arrayOfHero) { return _this.heroes = arrayOfHero; });
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.fetchHeroes();
                };
                AppComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h1>{{title}}</h1>\n    <h2>My Heroes</h2>\n    <ul class=\"heroes\">\n      <li *ngFor=\"#hero of heroes\"  [class.selected]=\"hero === selectedHero\"   (click)=\"onSelect(hero)\">\n        <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n      </li>\n    </ul>\n\t\n    <my-hero-detail  [hero]=\"selectedHero\" ></my-hero-detail>\n  ",
                        styles: ["\n    .selected {\t width: 150;  background-color: yellow;    color: blue;\n    }\n    .heroes {  color: green;\n    }\n\t .heroes li:hover { color: red;   background-color: white;\n    }\n    .heroes .badge {  color: white;   background-color: green;\n    }\n  "],
                        directives: [hero_detail_component_1.HeroDetailComponent],
                        providers: [hero_service_1.HeroService]
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
/*
 styles:[`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 10em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0em;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #EEE;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0em 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0px 0px 4px;
    }
  `]
  */
//# sourceMappingURL=app.component.js.map