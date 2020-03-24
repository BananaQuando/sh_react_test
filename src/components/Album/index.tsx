import React from 'react';
import { inject, observer } from "mobx-react";
import { IAlbumStore, IAlbumsStore } from '../../stores/AlbumsStore/interfaces';
import { observable, action } from 'mobx';

import Card from '../Card';

interface CardProps{
	albumID: number;
	albumsStore?: IAlbumsStore;
	albumStore?: IAlbumStore;
	loadPhotos?: boolean;
	limit?: number
}

@inject('albumsStore')
@observer
export default class PostBlock extends React.Component<CardProps> {

	@observable albumStore = {} as IAlbumStore;
	@observable loadPhotos = false;
	@observable limit = 12;
	@observable diplayButtonText = 'Отобразить фото';

	async componentDidMount(){

		const { albumID } = this.props;

		this.albumStore = await this.props.albumsStore!.getAlbum(albumID);
	}

	@action toggleDiplayPhotos(){

		this.diplayButtonText = this.loadPhotos ? 'Отобразить фото' : 'Скрыть фото';
		this.loadPhotos = this.loadPhotos ? false : true;
	}


	render() {

		const { id, photos, title } = this.albumStore;

		return (
			<Card cardClass='card-primary' title={title}>
				<div className='mb-2 clearfix'>
					<div className="pt-2 pb-2 float-left">
						<button onClick={() => {this.toggleDiplayPhotos()}} className="btn btn-success">{ this.diplayButtonText }</button>
					</div>
					<div className="float-right">
						<ul className="nav nav-pills">
							<li className="nav-item p-2">
								<label htmlFor={`limit-album-${id}`}>Лимит картинок</label>
							</li>
							<li className="nav-item pt-2 pb-2 pl-2">
								<select onChange={(event) => {
											this.limit = Number(event.target.value)
										}} 
										className='custom-select'
										name={`limit-album-${id}`}
										id={`limit-album-${id}`}>
									<option value={12}>12</option>
									<option value={24}>24</option>
									<option value={36}>36</option>
									<option value={48}>48</option>
								</select>
							</li>
						</ul>
					</div>
				</div>
				<div>
					<div className="filter-container p-0 row">
						{ this.loadPhotos &&  photos ? photos.map((photo, index) => {
							const p = index < this.limit ? <div key={index} className="filtr-item col-sm-2">
								<a href="https://via.placeholder.com/1200/FFFFFF.png?text=1" data-toggle="lightbox" data-title="sample 1 - white">
									<img src={photo.thumb} className="img-fluid mb-2" alt={photo.title}/>
								</a>
							</div> : '';
							return p;
						}) : '' }
					</div>
				</div>
				
			</Card>
		);
	}
}
