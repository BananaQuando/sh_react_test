export interface IAlbumResponce {
	id: number;
	userId: number;
	title: string;
}

export interface IPhotoResponce {
	albumId: number;
	id: number;
	title: string;
	url: string;
	thumbnailUrl: string;
}

export interface IPhotoStore{
	id: number;
	albumID: number;
	title: string;
	url: string;
	thumb: string;
}


export interface IAlbumStore {
	id: number;
	userID: number;
	title: string;
	photos: IPhotoStore[];
}

export interface IPhotosList {
	[key: number]: IPhotoStore;
}

export interface IAlbumsList {
	[key: number]: IAlbumStore;
}

export interface IUsersAlbumsList {
	[key: number]: IAlbumStore[];
}

export interface IAlbumsStore {
	albumsList: IAlbumsList;
	usersAlbumsList: IUsersAlbumsList;
	photosList: IPhotosList;
	getUserAlbums: Function;
	getAlbum: Function;
	getPhoto: Function;
}
