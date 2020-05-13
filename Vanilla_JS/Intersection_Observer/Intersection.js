const options = {
  root: null,
  rootMargin: "-250px 0px",
  threshold: 0.05
};

const observer = new IntersectionObserver(callback, options); //콜백, 옵션

document.querySelectorAll('.container p').forEach(p => {
  observer.observe(p);
  // console.log('watching', p.textContent);
});

function callback(entries, ob) { //두번째 인자는 observer(IntersectionObserver instance)
  console.log(ob);
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      console.log('intersecting');
      // console.log(entry.target);
      // console.log(entry.time, entry.intersectionRatio);

      entry.target.classList.add('active');
      // ob.unobserve(entry.target);
    } else {
      entry.target.classList.remove('active');
    }
  })
}