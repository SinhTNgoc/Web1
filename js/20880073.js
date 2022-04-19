function loadData(request, targetId, sourceId) {
  $.ajax({
    url: "https://web1-api.herokuapp.com/api/" + request,
    cache: false,
    success: function (data) {
      let jsonData = {
        data: data,
      };
      // console.log(data);
      let target = $(targetId);
      // let source = $(sourceId).html();
      // let template = Handlebars.compile(source);
      let template = Handlebars.templates[sourceId];
      $(target).html(template(jsonData));
    },
  });
}
