import {
	observable,
	action,
	// computed
} from "mobx";
import { 
	IPhotoStore,
	IPhotoResponce,
	IAlbumResponce,
	IAlbumStore,
	IAlbumsStore,
	IAlbumsList,
	IPhotosList,
	IUsersAlbumsList
 } from './interfaces';

export class AlbumsStore implements IAlbumsStore {

	@observable albumsList = {} as IAlbumsList;
	@observable usersAlbumsList = {} as IUsersAlbumsList;
	@observable photosList = {} as IPhotosList;

	async formatAlbumResponce(responce: IAlbumResponce): Promise<IAlbumStore>{

		return {
			id: responce.id,
			userID: responce.userId,
			title: responce.title,
			photos: [] as IPhotoStore[],
		}
	}

	async formatPhotoResponce(responce: IPhotoResponce): Promise<IPhotoStore>{

		return {
			id: responce.id,
			albumID: responce.albumId,
			title: responce.title,
			url: responce.url,
			thumb: responce.thumbnailUrl,
		}
	}

	@action async getUserAlbums(userID: number) {

		if (this.usersAlbumsList[userID]){
			return this.usersAlbumsList[userID];
		}else{
			const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userID}`);
			const data = await response.json();

			if (!this.usersAlbumsList[userID]) this.usersAlbumsList[userID] = [];
			data.forEach(async (el: IAlbumResponce)  => {
				const album = await this.formatAlbumResponce(el);

				this.albumsList[album.id] = album;
				this.albumsList[album.id].photos = await this.getAlbumPhotos(album.id);
				this.usersAlbumsList[userID].push(this.albumsList[album.id]);
			});
			
			return this.usersAlbumsList[userID];
		}
	}

	@action async getAlbumPhotos(albumID: number){

		if (this.albumsList[albumID] && this.albumsList[albumID]['photos'].length){
			return this.albumsList[albumID]['photos'];
		}else{

			const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumID}`);
			const data = await response.json();

			data.forEach(async (el: IPhotoResponce)  => {
				const photo = await this.formatPhotoResponce(el);
				if (!this.albumsList[photo.albumID]) this.albumsList[photo.albumID] = await this.getAlbum(photo.albumID);

				this.albumsList[photo.albumID].photos.push(photo);
				this.photosList[photo.id] = photo;
			});

			return this.albumsList[albumID].photos;
		}
	}

	@action async getAlbum(albumID: number){

		if (this.albumsList[albumID] && this.albumsList[albumID].photos){
			return this.albumsList[albumID];
		}else if (this.albumsList[albumID]) {
			this.albumsList[albumID].photos = await this.getAlbumPhotos(albumID);
			return this.albumsList[albumID];
		}else{

			const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumID}`);
			const data:IAlbumResponce = await response.json();

			const album = await this.formatAlbumResponce(data);
			this.albumsList[album.id] = album;
			this.albumsList[album.id].photos = await this.getAlbumPhotos(album.id);

			return this.albumsList[album.id];
		}
	}

	@action async getPhoto(photoID: number){

		if (this.photosList[photoID]){
			return this.photosList[photoID];
		}else{

			const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${photoID}`);
			const data:IPhotoResponce = await response.json();

			const photo = await this.formatPhotoResponce(data);
			this.photosList[photo.id] = photo;

			return this.photosList[photo.id];
		}
	}
}