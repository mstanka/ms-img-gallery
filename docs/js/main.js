const context = {
  title: "Welcome to My Uphillhiking Gallery",
  body: "",
  pictures: [
    {
      link: "http://www.uphillhiking.cz/category/skotsko/",
      alt: "Scotland",
      image: "http://uphillhiking.cz/wp-content/uploads/2017/05/IMG_8262w3.jpg",
      name: "Isle of Skye, Scotland",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam amet optio, asperiores corrupti animi vitae necessitatibus et laudantium debitis delectus.",
      date: "2017-04",
    },
    {
      link: "http://www.uphillhiking.cz/category/rusko/kamcatka/",
      alt: "Kamchatka, Russia",
      image: "http://uphillhiking.cz/wp-content/uploads/2017/08/IMG_1114w.jpg",
      name: "Kamchatka, Russia",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam amet optio, asperiores corrupti animi vitae necessitatibus et laudantium debitis delectus.",
      date: "2017-07",
    },
    {
      link: "hhttp://www.uphillhiking.cz/category/svycarsko/",
      alt: "Switzerland",
      image:
        "http://uphillhiking.cz/wp-content/uploads/2018/08/IMG_3621-2-web.jpg",
      name: "Rochers de Naye, Switzerland",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam amet optio, asperiores corrupti animi vitae necessitatibus et laudantium debitis delectus.",
      date: "2018-08",
    },
    {
      link: "http://www.uphillhiking.cz/category/italie/dolomity-italie/",
      alt: "Dolomites Italy",
      image:
        "http://uphillhiking.cz/wp-content/uploads/2018/09/2018-09-08-8.jpg",
      name: "Brenta, Italy",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam amet optio, asperiores corrupti animi vitae necessitatibus et laudantium debitis delectus.",
      date: "2018-09",
    },
    {
      link: "http://www.uphillhiking.cz/category/francie/ostrov-reunion/",
      alt: "Reunion Island",
      image:
        "http://www.uphillhiking.cz/wp-content/uploads/2018/12/2018-11-03-50.jpg",
      name: "Reunion Island, French department",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam amet optio, asperiores corrupti animi vitae necessitatibus et laudantium debitis delectus.",
      date: "2018-11",
    },
    {
      link: "http://www.uphillhiking.cz/category/italie/sardinie/",
      alt: "Sardegna, Italy",
      image:
        "http://www.uphillhiking.cz/wp-content/uploads/2019/07/2019-06-10-92-w-1024x683.jpg",
      name: "Sardegna, Italy",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam amet optio, asperiores corrupti animi vitae necessitatibus et laudantium debitis delectus.",
      date: "2019-06",
    },
  ],
};

const templateElement = document.getElementById("templateHB");

const templateSource = templateElement.innerHTML;

const template = Handlebars.compile(templateSource);
const compiledHtml = template(context);

document.getElementById("information").innerHTML = compiledHtml;
