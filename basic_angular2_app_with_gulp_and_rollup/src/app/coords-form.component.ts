        import {Component} from '@angular/core';
        import { Coords}    from './coords';
        @Component({
          moduleId: module.id,
          selector: 'coords-form',
          templateUrl: 'coords-form.component.html'
        })
        export class CoordsFormComponent {
          titles = ['Mr', 'Ms'];
          model = new Coords(1,this.titles[0], 'Alex therieur', '1969-07-11', 'good level');
          submitted = false;
          onSubmit() { this.submitted = true; }
            
          active = true;
            
          newCoord() {
            this.model = new Coords(2, null,'', null,'');
            this.active = false;
            setTimeout(() => this.active = true, 0);
          }  
            
          // TODO: Remove this when we're done
          get diagnostic() { return JSON.stringify(this.model); }
        }