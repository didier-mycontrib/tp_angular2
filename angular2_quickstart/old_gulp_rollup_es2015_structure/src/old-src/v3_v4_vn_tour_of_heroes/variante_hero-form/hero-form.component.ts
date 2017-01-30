        import {Component} from '@angular/core';
        import { SuperHero}    from './super-hero';
        @Component({
          moduleId: module.id,
          selector: 'hero-form',
          templateUrl: 'hero-form.component.html'
        })
        export class HeroFormComponent {
          powers = ['Really Smart', 'Super Flexible',
                    'Super Hot', 'Weather Changer'];
          model = new SuperHero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
          submitted = false;
          onSubmit() { this.submitted = true; }
            
          active = true;
            
          newHero() {
            this.model = new SuperHero(42, '', '');
            this.active = false;
            setTimeout(() => this.active = true, 0);
          }  
            
          // TODO: Remove this when we're done
          get diagnostic() { return JSON.stringify(this.model); }
        }