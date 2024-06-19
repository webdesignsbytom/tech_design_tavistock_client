// Images
import WervingsLogo from '../assets/images/logos/wervings-syrups-logo-for-review.png';
import RVSLogo from '../assets/images/logos/rapid-van-solutions-logo-for-review.jpg';
import MusicLogo from '../assets/images/logos/turnbull-music-review-image.jpeg';
import MyeaLogo from '../assets/images/logos/myecoapp-logo-for-review.jpg';

let reviewId = 0;

export const reviewsDataArray = [
    {
        id: reviewId++,
        title: 'Wervings',
        desc: 'Tom has run our business ecommerce website for years now and has always done splendid work! Very easy to work with.',
        url: 'https://www.wervings.co.uk',
        imageUrl: WervingsLogo
    },
    {
        id: reviewId++,
        title: 'Rapidvansolutions',
        desc: 'Thank you for designing and building our website. I understand nothing about the internet and Tom worked with that.',
        url: 'https://www.rapidvansolutions.com',
        imageUrl: RVSLogo
    },
    {
        id: reviewId++,
        title: 'Stuart Turnbull',
        desc: 'A hard working man and a pleasure to work with. Said yes to everything i asked and didnt over complicate the job.',
        url: 'https://www.stuartturnbull.net',
        imageUrl: MusicLogo
    },
    {
        id: reviewId++,
        title: 'Myecoapp.org',
        desc: 'Tom built a beautiful site for us and brings most of the ideas about improvements and modernisations.',
        url: 'https://www.myecoapp.org',
        imageUrl: MyeaLogo
    }
]