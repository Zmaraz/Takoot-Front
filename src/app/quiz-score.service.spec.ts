import { TestBed } from '@angular/core/testing';

import { QuizScoreService } from './quiz-score.service';

describe('QuizScoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuizScoreService = TestBed.get(QuizScoreService);
    expect(service).toBeTruthy();
  });
});
