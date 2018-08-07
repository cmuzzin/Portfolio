import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class ImagesService {
  toggleGallery: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor() { }

  static getItemImages() {
    return [
      {
        collection: "My Spotify",
        images: [
          {
            src: '../../assets/mySpotifyImages/login.png',
            title: 'Login'
          },
          {
            src: '../../assets/mySpotifyImages/playlists.png',
            title: 'Playlist'
          },
          {
            src: '../../assets/mySpotifyImages/albums.png',
            title: 'Albums'
          },
          {
            src: '../../assets/mySpotifyImages/results.png',
            title: 'Results'
          },
          {
            src: '../../assets/mySpotifyImages/more_results.png',
            title: 'Results cont.'
          },
          {
            src: '../../assets/mySpotifyImages/playlist.png',
            title: 'Playlist'
          },
          {
            src: '../../assets/mySpotifyImages/artist.png',
            title: 'Artist'
          },
          {
            src: '../../assets/mySpotifyImages/add_to_playlists.png',
            title: 'Add To Playlist'
          },
        ],
        icon: 'fa-spotify',
        toggle: false,
        wip: true
      },
      {
        collection: `App One`,
        images: [
          {
            src: '../../assets/ItemWeb/itemWeb_existingProduct.PNG',
            title: 'Product'
          },
          {
            src: '../../assets/ItemWeb/itemWeb_existingBundle.PNG',
            title: 'Bundle'
          },
          {
            src: '../../assets/ItemWeb/itemWeb_createCollection.PNG',
            title: 'Collection Search'
          },
          {
            src: '../../assets/ItemWeb/itemWeb_existingCollection.PNG',
            title: 'Collection'
          },
          {
            src: '../../assets/ItemWeb/itemWeb_modalExample.PNG',
            title: 'Modal'
          }
        ],
        description: 'Re designed the UI for creating a composite (grouping of items), collection (grouping of composites), and bundle (grouping of products).',
        icon:'fa-tag',
        toggle: false,
        wip: false
      },
      {
        collection: `App Two`,
        images: [
          {
            src: '../../assets/MCM/mcm_login.PNG',
            title: 'login'
          },
          {
            src: '../../assets/MCM/mcm_calendarView.PNG',
            title: 'Calendar'
          },
          {
            src: '../../assets/MCM/mcm_dayview.PNG',
            title: 'Day View'
          },
          {
            src: '../../assets/MCM/mcm_editGroupModal.PNG',
            title: 'Edit a Group'
          },
          {
            src: '../../assets/MCM/mcm_noteModal.PNG',
            title: 'Notes'
          },
          {
            src: '../../assets/MCM/mcm_search.PNG',
            title: 'Search'
          },
          {
            src: '../../assets/MCM/mcm_admin.PNG',
            title: 'Admin'
          }
        ],
        icon:'fa-calendar',
        toggle:  false,
        wip: false
      },
      {
        collection: `App Three`,
        description: 'Fresh application for the current process of planning and setting up a store.',
        images: [
          {
            src: '../../assets/SPC_Images/spc_login.png',
            title: 'Login'
          },
          {
            src: '../../assets/SPC_Images/spc_home.png',
            title: 'Home'
          },
          {
            src: '../../assets/SPC_Images/spc_search.png',
            title: 'Search'
          },
          {
            src: '../../assets/SPC_Images/spc_store.png',
            title: 'Store'
          },
          {
            src: '../../assets/SPC_Images/spc_building.png',
            title: 'Building'
          }
        ],
        icon: 'fa-building',
        toggle: false,
        wip: true
      },
      {
        collection: `App Four`,
        images: [
          {
            src: '../../assets/Email_Flow_Images/rememberMe.png',
            title: 'Step 1'
          },
          {
            src: '../../assets/Email_Flow_Images/prepCalc.png',
            title: 'Step 2'
          },
          {
            src: '../../assets/Email_Flow_Images/createALook.png',
            title: 'Step 3'
          },
          {
            src: '../../assets/Email_Flow_Images/supportingDocs.png',
            title: 'Step 4',
          },
          {
            src: '../../assets/Email_Flow_Images/storeoverride.png',
            title: 'Step 5'
          }
        ],
        icon:'fa-envelope-o',
        toggle: false,
        wip: true
      }
    ]
  }

}
