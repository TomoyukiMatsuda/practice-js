// 表示箇所
const preview = document.forms.form1.preview;

const form = document.forms.form1.image_file.addEventListener('change', e => {
  // console.log(e.target.files[0]);
  const uploadFile = e.target.files[0];

  const reader = new FileReader();
  reader.addEventListener('load', () => {
    preview.src = reader.result;
    console.log(preview.src);
  });
  reader.readAsDataURL(uploadFile);
});
