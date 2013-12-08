(function () {
  var companiesListTpl = Handlebars.compile($("#company-list-tpl").html());

  function show_companies(company_type) {
    companies = CompaniesStorage();

    console.log(company_type);
    var el = $('.companies');
    el.on("click", '.home', function () {
      $('.services').show();
      $('.companies').hide();
    });

    companies_list = _.has(companies, company_type) ? companies[company_type] : [];

    el.html(companiesListTpl(companies_list));
    el.fadeIn();
  };


  $(".services img").on("click", function () {
    var type = $(this).data('service');
    show_companies(type);
    $('.services').hide();
  });

}());