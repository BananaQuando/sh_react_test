import { observable, action, computed } from "mobx";

export interface IHeaderStore {
	userId: number;
	id: number;
	title: string;
	body: string;
}

export class HeaderStore implements IHeaderStore {

	@observable userId = 0;
	@observable id = 0;
	@observable title = "";
	@observable body = "";
}