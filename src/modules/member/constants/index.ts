import * as Yup from 'yup';

const NAMESPACE = 'MEMBER';

export const MEMBERS = [
  {
    id: '1',
    name: 'Melania',
    address: 'Jl. Lamper Sari No.41',
    village: 'Peterongan',
    subdistrict: 'Semarang Selatan',
    phone: '08157561',
    coordinate: {
      lat: '-7.003219024542244',
      lng: '110.43278085978217',
    },
    isActive: true,
  },
  {
    id: '2',
    name: 'Tazrian',
    address: 'Jl. Guntur 31-7',
    village: 'Gajahmungkur',
    subdistrict: 'Gajahmungkur',
    phone: '08225765',
    coordinate: {
      lat: '-7.00617489627636',
      lng: '110.41195549014796',
    },
    isActive: true,
  },
  {
    id: '3',
    name: 'Salwa',
    address: 'Jl. Harmoni',
    village: 'Pundakpayung',
    subdistrict: 'Banyumanik',
    phone: '08167097',
    coordinate: {
      lat: '-7.086917063797628',
      lng: '110.41126815172986',
    },
    isActive: true,
  },
  {
    id: '4',
    name: 'Lucky',
    address: 'Jl. Taman Setiabudi',
    village: 'Pedalangan',
    subdistrict: 'Banyumanik',
    phone: '08556052',
    coordinate: {
      lat: '-7.066892712986718',
      lng: '110.42302157132758',
    },
    isActive: true,
  },
  {
    id: '5',
    name: 'Gilly',
    address: 'Jl. Sapta Prasetya Barat I',
    village: 'Pedurungan Kidul',
    subdistrict: 'Pedurungan',
    phone: '08912367',
    coordinate: {
      lat: '-7.015380065982398',
      lng: '110.47402154928986',
    },
    isActive: true,
  },
  {
    id: '6',
    name: 'Dewa',
    address: 'Jl. Jangli Gebeng ',
    village: 'Jangli',
    subdistrict: 'Tembalang',
    phone: '08964598',
    coordinate: {
      lat: '-7.0277577060453735',
      lng: '110.43325219051792',
    },
    isActive: false,
  },
  {
    id: '7',
    name: 'Huga',
    address: 'Jl. Tumpang X 12-13 ',
    village: 'Gajahmungkur',
    subdistrict: 'Gajahmungkur',
    phone: '08964598',
    coordinate: {
      lat: '-7.006929301854095',
      lng: '110.40321145080519',
    },
    isActive: false,
  },
  {
    id: '8',
    name: 'Husna',
    address: 'Jl. Krakatau VII 21-1 ',
    village: 'Karangtempel',
    subdistrict: 'Semarang Timur',
    phone: '0816785',
    coordinate: {
      lat: '-6.988928253487978',
      lng: '110.43738152209028',
    },
    isActive: true,
  },
  {
    id: '9',
    name: 'Satria',
    address: 'Gg. Iklas',
    village: 'Tj. Mas',
    subdistrict: 'Semarang Utara',
    phone: '08564255',
    coordinate: {
      lat: '-6.962081491834535',
      lng: '110.42743956256153',
    },
    isActive: false,
  },
  {
    id: '10',
    name: 'Chanyeol',
    address: 'Jl. Sigawe 27-21',
    village: 'Tembalang',
    subdistrict: 'Tembalang',
    phone: '08564255',
    coordinate: {
      lat: '-7.0572170570604555',
      lng: '110.44019131681551',
    },
    isActive: true,
  },
];

export interface CreateMember {
  name: string;
  address: string;
  phone: string;
  isActive: boolean;
}

export const INITIAL_VALUES_CREATE_MEMBER: CreateMember = {
  name: '',
  address: '',
  phone: '',
  isActive: true,
};

export const CreateMemberSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  address: Yup.string().required('Address is required'),
  phone: Yup.string().required('Phone is required'),
  isActive: Yup.boolean().required('Status is required'),
});
