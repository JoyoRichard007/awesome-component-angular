import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from '../../models/candidate.model';
import { CandidatesService } from '../../services/candidates.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CandidateListComponent implements OnInit {

	loading$!: Observable<boolean>;
	candidate$!: Observable<Candidate[]>

	constructor (private candidateService: CandidatesService) {}

	ngOnInit(): void {
		this.initObservable();
		this.candidateService.getCandidatesFromServer();
	}
	
	private initObservable() {
		this.loading$ = this.candidateService.loading$;
		this.candidate$ = this.candidateService.candidates$;
	}
}
