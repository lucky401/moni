import * as Yup from 'yup';

const NAMESPACE = 'UNIT';

export const UNITS = [
  {
    id: '1',
    name: 'Bank Sampah Jeruk Raya',
    address: 'Jl. Jeruk Raya No.17',
    village: 'Semarang Sel',
    subdistrict: 'Lamper Lor',
    coordinate: {
      lat: '-7.005082405828691',
      lng: '110.4384861570951',
    },
    isActive: false,
  },
  {
    id: '2',
    name: 'Bank Sampah Peterongan',
    address: 'Jl. Lamper Sari No.41',
    village: 'Peterongan',
    subdistrict: 'Semarang Selatan',
    coordinate: {
      lat: '-7.005888897362026',
      lng: '110.43662658024917',
    },
    isActive: true,
  },
  {
    id: '3',
    name: 'Bank Sampah Wilis',
    address: 'Jl. Wilis No.5',
    village: 'Tegalasri',
    subdistrict: 'Candisari',
    coordinate: {
      lat: '-7.004950615355938',
      lng: '110.42044882741612',
    },
    isActive: true,
  },
  {
    id: '4',
    name: 'Bank Sampah Veteran',
    address: 'Jl. Veteran No. 1',
    village: 'Bendungan',
    subdistrict: 'Gajahmungkur',
    coordinate: {
      lat: '-6.995939455971388',
      lng: '110.41027966891225',
    },
    isActive: true,
  },
  {
    id: '5',
    name: 'Bank Sampah Senopati',
    address: 'Jl. Panembahan Senopati No.274 L',
    village: 'Ngaliyan',
    subdistrict: 'Ngaliyan',
    coordinate: {
      lat: '-6.9992495641450265',
      lng: '110.3539645664535',
    },
    isActive: false,
  },
  {
    id: '6',
    name: 'Bank Sampah Gaharu Raya',
    address: 'Jl. Gaharu Raya No. 213-16',
    village: 'Srondol Wetan',
    subdistrict: 'Banyumanik',
    coordinate: {
      lat: '-7.071081373660399',
      lng: '110.41754364628851',
    },
    isActive: true,
  },
  {
    id: '7',
    name: 'Bank Sampah Genuk',
    address: 'Jl. Kenanga I 3',
    village: 'Genuk',
    subdistrict: 'Ungaran',
    coordinate: {
      lat: '-7.141662864201256',
      lng: '110.40640836029151',
    },
    isActive: true,
  },
  {
    id: '8',
    name: 'Bank Sampah Undip',
    address: 'Jl. Prof. Sudarto',
    village: 'Bulusan',
    subdistrict: 'Tembalang',
    coordinate: {
      lat: '-7.055794355055742',
      lng: '110.44140726252647',
    },
    isActive: true,
  },
  {
    id: '9',
    name: 'Bank Sampah Ngesrep',
    address: 'Jl. Bukit Lawu 18-20',
    village: 'Ngesrep',
    subdistrict: 'Banyumanik',
    coordinate: {
      lat: '-7.04698073139744',
      lng: '110.43192163075292',
    },
    isActive: true,
  },
  {
    id: '10',
    name: 'Bank Sampah Kedungmundu',
    address: 'Jl. Sinar Bakti I ',
    village: 'Kedungmundu',
    subdistrict: 'Tembalang',
    coordinate: {
      lat: '-7.024428166146297',
      lng: '110.46996608183196',
    },
    isActive: false,
  },
];

export interface CreateUnit {
  name: string;
  address: string;
  village: string;
  subdistrict: string;
  isActive: boolean;
}

export const INITIAL_VALUES_CREATE_UNIT: CreateUnit = {
  name: '',
  address: '',
  village: '',
  subdistrict: '',
  isActive: true,
};

export const CreateUnitSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  address: Yup.string().required('Address is required'),
  village: Yup.string().required('Village is required'),
  subdistrict: Yup.string().required('Subdistrict is required'),
  isActive: Yup.boolean().required('Status is required'),
});
