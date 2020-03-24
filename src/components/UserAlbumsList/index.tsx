import React from 'react';
import { inject, observer } from "mobx-react";
import { IAlbumStore, IAlbumsStore } from '../../stores/AlbumsStore/interfaces';
import { observable } from 'mobx';
import Album from '../Album';

interface Props {
	userID: number;
	albumsStore?: IAlbumsStore;
	albumStore?: IAlbumStore;
}


@inject('albumsStore')
@observer
export default class UserAlbumsList extends React.Component<Props>{

	@observable albumStore = [] as IAlbumStore[];

	async componentDidMount() {

		const { userID } = this.props;
		this.albumStore = await this.props.albumsStore!.getUserAlbums(userID);
	}

	render() {

		return (
			<>
				{ this.albumStore.map((albumItem, index) => <Album key={index} albumID={albumItem.id} />) }
			</>
		);
	}
}