import * as Yup from 'yup';

const ValidationForm = Yup.object().shape({
  numberphone: Yup.string().min(10 , 'Số điện thoại chưa đúng!').required('Nhập số điện thoại'),
  password: Yup.string().min(6, 'Mật khẩu quá ngắn!').required('Nhập mật khẩu'),
});

export default ValidationForm;
