import {
	observable, action,
	// action,
	// computed
} from "mobx";

export interface IHeaderContentStore {
	headingTitle: string,
	breadcrumbs: {
		title: string,
		link: string,
		isCurrent: boolean
	}[],
	setTitie: Function,
	setBreadcrumbs: Function
}

export class HeaderContentStore implements IHeaderContentStore {

	@observable headingTitle = 'Главная';
	@observable breadcrumbs = [
		{
			title: 'Глвная',
			link: '/',
			isCurrent: true
		}
	];
	
	@action setTitie(t: string){
		this.headingTitle = t;
	}

	@action setBreadcrumbs(b: {
		title: string,
		link: string,
		isCurrent: boolean
	}[]){
		this.breadcrumbs = b;
	}
}