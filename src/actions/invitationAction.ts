import useBrideGroomStore from '@store/useBrideGroomStore';
import useGreetingStore from '@store/useGreetingStore';
import useThemeStore from '@store/useThemeStore';
import { useWeddingStore } from '@store/useWeddingStore';
import useContactStore from '@store/useContactStore';
import useAddressStore from '@store/useAddressStore';
import useImageStore from '@store/useImageStore';
import { InvitationDetiail } from '../types/invitationType';
import { useEffect } from 'react';
import { useInvitationStore } from '@/store/useInvitaionStore';
import { useCalendarFeatureStore } from '@/store/OptionalFeature/useCalendarFeatureStore';
import useGallaryStore from '@/store/useGallaryStore';
import useAccountStore from '@/store/useAccountStore';
import { useMusicFeatureStore } from '@/store/OptionalFeature/useMusicFeatureStore';

export const getInvitationAction = (): InvitationDetiail => {
  const { address } = useAddressStore();
  const { weddingDate, weddingTime } = useWeddingStore();
  const { greetingTitle, greetingContent } = useGreetingStore();
  const { uploadedImage } = useImageStore();
  const contacts = useContactStore((state) => state.contacts);
  const { brideGroom } = useBrideGroomStore();
  const { font } = useThemeStore();
  const groom = contacts.find((person) => person.role === '신랑');
  const bride = contacts.find((person) => person.role === '신부');
  const { invitationtitle } = useInvitationStore();
  const { subCalendarFeatures } = useCalendarFeatureStore();
  const { images, grid } = useGallaryStore();
  const { accounts } = useAccountStore();
  const { selectedMusic } = useMusicFeatureStore();
  return {
    //청첩장 정보
    title: invitationtitle,

    //결혼식 정보
    date: weddingDate?.toString() as string,
    weddingTime: `${weddingTime.hour}시 ${weddingTime.minute}분`,
    location: [address as string],
    imgUrl: uploadedImage as string,
    contentType: greetingTitle,
    content: greetingContent,

    //신부/신랑측 정보
    groomName: brideGroom[0].name,
    brideName: brideGroom[1].name,

    groomFatherName: brideGroom[0].family.father.name,
    groomMotherName: brideGroom[0].family.mother.name,
    brideFatherName: brideGroom[1].family.father.name,
    brideMotherName: brideGroom[1].family.mother.name,
    groomFatherAlive: !brideGroom[0].family.father.isDeceased,
    groomMotherAlive: !brideGroom[0].family.mother.isDeceased,
    brideFatherAlive: !brideGroom[1].family.father.isDeceased,
    brideMotherAlive: !brideGroom[1].family.mother.isDeceased,

    //청첩장 스타일 정보
    font: font,
    backgroundColor: '',
    audio: selectedMusic.id,

    //참석여부
    attendanceTitle: '참석 여부 제목',
    attendanceContent: '참석 여부 설명',
    attendanceIsDining: true,

    //선택기능 정보
    calendars: [
      {
        order: 1,
        calendar: subCalendarFeatures.calendar,
        dDay: subCalendarFeatures.dday,
        countdown: subCalendarFeatures.countdown,
      },
    ],
    galleries: [
      {
        order: 2,
        images: images,
        grid: grid,
      },
    ],
    accounts: [
      {
        order: 3,
        accountHolderName: '예금주',
        bankName: '은행명',
        accountNumber: '계좌번호',
        kakaoUrl: '카카오페이 송금 링크',
      },
      {
        order: 3,
        accountHolderName: '예금주',
        bankName: '은행명',
        accountNumber: '계좌번호',
        kakaoUrl: '카카오페이 송금 링크',
      },
      {
        order: 3,
        accountHolderName: '예금주',
        bankName: '은행명',
        accountNumber: '계좌번호',
        kakaoUrl: '카카오페이 송금 링크',
      },
      {
        order: 3,
        accountHolderName: '예금주',
        bankName: '은행명',
        accountNumber: '계좌번호',
        kakaoUrl: '카카오페이 송금 링크',
      },
    ],
    contacts: [
      {
        //여기 널값 조심
        order: 4,
        groomContact: groom?.contact as string,
        brideContact: bride?.contact as string,
        groomFatherContact: groom?.fatherContact as string,
        groomMotherContact: groom?.motherContact as string,
        brideFatherContact: bride?.fatherContact as string,
        brideMotherContact: bride?.motherContact as string,
      },
    ],
    notices: [
      {
        order: 5,
        title: '',
        content: '',
        image: '',
      },
      {
        order: 5,
        title: '',
        content: '',
        image: '',
      },
      {
        order: 5,
        title: '',
        content: '',
        image: '',
      },
    ],
    title: '',
    groomName: '',
    brideName: '',
    groomContact: '',
    brideContact: '',
    date: '',
    location: [],
    imgUrl: '',
    contentType: '',
    content: '',
    weddingTime: '',
    groomFatherName: '',
    groomMotherName: '',
    brideFatherName: '',
    brideMotherName: '',
    groomFatherContact: '',
    groomMotherContact: '',
    brideFatherContact: '',
    brideMotherContact: '',
    groomFatherAlive: false,
    groomMotherAlive: false,
    brideFatherAlive: false,
    brideMotherAlive: false,
    backgroundColor: '',
    attendanceTitle: '참석 여부 제목',
    attendanceContent: '참석 여부 설명',
    attendanceIsDining: false,
  };
};

export const useUpdateInvitationStore = (details: InvitationDetiail) => {
  const { setAddress, setJibunAddress, setCoords } = useAddressStore();
  const { setWeddingDate, setWeddingTime } = useWeddingStore();
  const { setGreeting, setGreetingTitle, setSelectedSample } =
    useGreetingStore();
  const { setUploadedImage } = useImageStore();
  const contacts = useContactStore((state) => state.updateContact);
  const { updateBrideGroom, updateFamily } = useBrideGroomStore();
  const { setFont } = useThemeStore();

  useEffect(() => {
    if (details) {
      // Address 업데이트
      setAddress('주소', '짚코드');
      setJibunAddress('');
      setCoords(0, 0);

      // Wedding 정보 업데이트
      setWeddingDate(new Date(details.date));
      setWeddingTime(0, 0);
      // Greeting 업데이트
      setGreeting(details.content);
      setGreetingTitle(details.contentType);
      setSelectedSample('');

      // 이미지 업데이트
      setUploadedImage(details.imgUrl);

      // Contacts 업데이트
      contacts(0, 'fatherContact', details.brideFatherContact);
      contacts(0, 'motherContact', details.brideMotherContact);
      contacts(1, 'fatherContact', details.groomFatherContact);
      contacts(1, 'motherContact', details.groomMotherContact);
      contacts(0, 'contact', details.brideContact);
      contacts(1, 'contact', details.groomContact);

      // BrideGroom 업데이트
      updateBrideGroom(0, 'name', details.brideName);
      updateBrideGroom(1, 'name', details.groomName);

      // Family 정보 업데이트
      updateFamily(0, 'father', 'name', details.brideFatherName);
      updateFamily(0, 'mother', 'name', details.brideMotherName);
      updateFamily(0, 'father', 'isDeceased', details.brideFatherAlive);
      updateFamily(0, 'mother', 'isDeceased', details.brideMotherAlive);
      updateFamily(1, 'father', 'name', details.groomFatherName);
      updateFamily(1, 'mother', 'name', details.groomMotherName);
      updateFamily(1, 'father', 'isDeceased', details.groomFatherAlive);
      updateFamily(1, 'mother', 'isDeceased', details.groomMotherAlive);

      // Theme 설정 업데이트
      setFont(details.font);
    }
  }, [details]); // details 변경 시 실행
};
