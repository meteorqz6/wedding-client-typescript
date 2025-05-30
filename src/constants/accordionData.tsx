import AddressInput from '@form/BasicInformation/AddressInput/AddressInput';
import NameInput from '@form/BasicInformation/NameInput/NameInput';
import WeddingDateInput from '@form/BasicInformation/WeddingDateInput/WeddingDateInput';
import AccountFeature from '@form/Feature/AccountFeature/AccountFeature';
import CalendarFeature from '@form/Feature/CalendarFeature/CalendarFeature';
import ContactFeature from '@form/Feature/ContactFeature/ContactFeature';
import GalleryFeature from '@form/Feature/GalleryFeature/GalleryFeature';
import GreetingFeature from '@form/Feature/GreetingFeature/GreetingFeature';
import LocationFeature from '@form/Feature/LocationFeature/LocationFeature';
import RsvpExample from '@form/Feature/RsvpFeature/RsvpExample';
import NoticeFeature from '@form/Feature/NoticeFeature/NoticeFeature';
import MusicFeature from '@form/Theme/MusicFeature/MusicFeature';
import PhotoTalkFeature from '@/components/form/Feature/PhotoTalkFeature/PhotoTalkFeature';
import ThumbnailFeature from '@/components/form/Feature/ThumbnailFeature/ThumbnailFeature';
import FontFeature from '@/components/form/Theme/FontFeature/FontFeature';

export interface AccordionItemData {
  id: number;
  title: string;
  feature: string;
  content: React.ReactNode;
  hasToggle?: boolean;
  hasDrag?: boolean;
}

export const accordionData: AccordionItemData[] = [
  {
    id: 1,
    title: '이름',
    feature: '',
    content: <NameInput />,
    hasToggle: false,
    hasDrag: false,
  },
  {
    id: 2,
    title: '예식 일시',
    feature: '',
    content: <WeddingDateInput />,
    hasToggle: false,
    hasDrag: false,
  },
  {
    id: 3,
    title: '예식 장소',
    feature: '',
    content: <AddressInput />,
    hasToggle: false,
    hasDrag: false,
  },
  {
    id: 4,
    title: '대표 이미지',
    feature: 'thumbnail',
    content: <ThumbnailFeature />, // <ImageInput />,
    hasToggle: false,
    hasDrag: false,
  },
  {
    id: 5,
    title: '제목 / 인사말',
    feature: 'greeting',
    content: <GreetingFeature />,
    hasToggle: false,
    hasDrag: false,
  },
  {
    id: 6,
    title: '참석 여부',
    feature: 'rsvp',
    content: <RsvpExample />,
    hasToggle: false,
    hasDrag: false,
  },
  {
    id: 7,
    title: '실시간 포토월',
    feature: 'phototalk',
    content: <PhotoTalkFeature />,
    hasToggle: false,
    hasDrag: false,
  },
  {
    id: 8,
    title: '캘린더',
    feature: 'calendar',
    content: <CalendarFeature />,
    hasToggle: true,
    hasDrag: true,
  },
  {
    id: 9,
    title: '지도 / 교통수단',
    feature: 'location',
    content: <LocationFeature />,
    hasToggle: true,
    hasDrag: true,
  },
  {
    id: 10,
    title: '갤러리',
    feature: 'gallery',
    content: <GalleryFeature />,
    hasToggle: true,
    hasDrag: true,
  },
  {
    id: 11,
    title: '축의금',
    feature: 'account',
    content: <AccountFeature />,
    hasToggle: true,
    hasDrag: true,
  },
  {
    id: 12,
    title: '연락하기',
    feature: 'contact',
    content: <ContactFeature />,
    hasToggle: true,
    hasDrag: true,
  },
  {
    id: 13,
    title: '공지사항',
    feature: 'notice',
    content: <NoticeFeature />,
    hasToggle: true,
    hasDrag: true,
  },
  {
    id: 14,
    title: '글꼴',
    feature: '',
    content: <FontFeature />,
    hasToggle: false,
    hasDrag: false,
  },
  {
    id: 15,
    title: '배경 음악',
    feature: 'music',
    content: <MusicFeature />,
    hasToggle: true,
    hasDrag: false,
  },
  // {
  //   id: 14,
  //   title: '테마 색상',
  //   feature: '',
  //   content: <ThemeFeature />,
  //   hasToggle: false,
  //   hasDrag: false,
  // },

  // {
  //   id: 16,
  //   title: '인트로 효과',
  //   feature: '',
  //   content: <ThemeFeature />,
  //   hasToggle: true,
  //   hasDrag: false,
  // },
];

// 드래그 가능한 기능 - 섹션과 연결
// export const getSection = (feature: string): React.ReactNode | null => {
//   switch (feature) {
//     case 'calendar':
//       return <CalendarSection />;
//     case 'location':
//       return <LocationSection />;
//     case 'gallery':
//       return <GallerySection />;
//     case 'account':
//       return <MoneySection />;
//     case 'contact':
//       return <ContactSection />;
//     case 'notice':
//       return <NoticeSection />;
//     default:
//       return null;
//   }
// };
