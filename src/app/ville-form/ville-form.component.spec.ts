import { ComponentFixture, TestBed } from '@angular/core/testing';

//import { VilleFormComponent } from './ville-form.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ville-form',
  templateUrl: './ville-form.component.html',
  styleUrls: ['./ville-form.component.css']
})
export class VilleFormComponent {
  ville: string = '';

  onSubmit() {
    // Vous pouvez ici gérer la soumission du formulaire, par exemple, en ajoutant la ville à une liste de villes.
    console.log('Ville ajoutée : ' + this.ville);
    // Réinitialisez le champ du formulaire
    this.ville = '';
  }
}


describe('VilleFormComponent', () => {
  let component: VilleFormComponent;
  let fixture: ComponentFixture<VilleFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VilleFormComponent]
    });
    fixture = TestBed.createComponent(VilleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
