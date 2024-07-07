import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCampaignComponent } from './post-campaign.component';

describe('PostCampaignComponent', () => {
  let component: PostCampaignComponent;
  let fixture: ComponentFixture<PostCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostCampaignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
