'use strict';

{
  const tabLabels = document.querySelectorAll('.tab__label li a');
  const tabContents = document.querySelectorAll('.tab__content');

  console.log(tabLabels, tabContents);

  tabLabels.forEach( clickedLabel => {
    clickedLabel.addEventListener('click', e => {
      console.log(clickedLabel);
      e.preventDefault();

      tabLabels.forEach(label => {
        label.classList.remove('active');
      });

      clickedLabel.classList.add('active');


      tabContents.forEach(content => {
        content.classList.remove('active');
      });

      // datasetがdata-を表す、今回はdataset.idがhtml側のdata-idをさす
      document.getElementById(clickedLabel.dataset.id).classList.add('active');
      console.log(clickedLabel.dataset);
      console.log(clickedLabel.dataset.id);
    })
  });

}