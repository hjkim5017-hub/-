
import { Category, Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: '모던 미니멀리즘 리빙룸',
    category: Category.RESIDENTIAL,
    description: '불필요한 장식을 배제하고 공간 본연의 미학을 살린 모던 주거 공간입니다.',
    imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop',
    client: '개인 고객',
    location: '전주 에코시티',
    year: '2024'
  },
  {
    id: '2',
    title: '내추럴 무드 다이닝 스튜디오',
    category: Category.COMMERCIAL,
    description: '따뜻한 질감의 소재와 조명이 어우러진 감각적인 다이닝 공간입니다.',
    imageUrl: 'https://images.unsplash.com/photo-1556911220-e15595b6a981?q=80&w=1200&auto=format&fit=crop',
    client: '스튜디오 오뉴월',
    location: '전주 신시가지',
    year: '2024'
  },
  {
    id: '3',
    title: 'LX ZIN 프리미엄 마스터룸',
    category: Category.RESIDENTIAL,
    description: 'LX ZIN의 최고급 자재를 사용하여 완성한 격조 높은 침실 인테리어입니다.',
    imageUrl: 'https://images.unsplash.com/photo-1616486341353-c5833ad88aad?q=80&w=1200&auto=format&fit=crop',
    client: '개인 고객',
    location: '전주 효자동',
    year: '2023'
  },
  {
    id: '4',
    title: '도심 속 갤러리 하우스',
    category: Category.MINIMALISM,
    description: '예술적인 감각과 실용성이 조화를 이루는 미니멀 갤러리 하우스입니다.',
    imageUrl: 'https://images.unsplash.com/photo-1600607687940-477a63bd39d8?q=80&w=1200&auto=format&fit=crop',
    client: '개인 고객',
    location: '전주 송천동',
    year: '2023'
  }
];
