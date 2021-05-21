import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTeamMoveComponent } from './project-team-move.component';

describe('ProjectTeamMoveComponent', () => {
  let component: ProjectTeamMoveComponent;
  let fixture: ComponentFixture<ProjectTeamMoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectTeamMoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTeamMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
