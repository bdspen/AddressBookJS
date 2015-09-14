//shows the form to add another address to a NEW contact
$(document).ready(function() {
  $("#add-address").click(function() {
    $("#new-addresses").append('<h4>Additional Address for New Contact</h4>' +
                                '<div class="new-address">' +
                                 '<div class="form-group">' +
                                   '<label for="new-street">Street</label>' +
                                   '<input type="text" class="form-control new-street">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-city">City</label>' +
                                   '<input type="text" class="form-control new-city">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-state">State</label>' +
                                   '<input type="text" class="form-control new-state">' +
                                 '</div>' +
                               '</div>');
  });
//shows the form to add an address to an EXISTING contact
  $("#add-address-existing").click(function() {
    $("#addresses").append('<h4>Additional Address for This Contact</h4>' +
                                '<div class="work-address">' +
                                 '<div class="form-group">' +
                                   '<label for="work-street">Street</label>' +
                                   '<input type="text" class="form-control work-street">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="work-city">City</label>' +
                                   '<input type="text" class="form-control work-city">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="work-state">State</label>' +
                                   '<input type="text" class="form-control work-state">' +
                                 '</div>' +
                               '</div>');
  });
//creates a new Contact object from form data
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    newContact = { firstName: inputtedFirstName, lastName: inputtedLastName, addresses: [] };

    $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();

      var newAddress = { street: inputtedStreet, city: inputtedCity, state: inputtedState };
      newContact.addresses.push(newAddress);
    });
//  shows contact name on page
//  WILL REFRESH UPDATED ADDRESSES WHEN NAME IS CLICKED AGAIN (AFTER ADDITIONAL ADDRESS ADDS)
    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");

//  prints contact object on the page with its properties
    $(".contact").last().click(function() {
      $("#show-contact").show();

      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);

      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.street + ", " + address.city + ", " + address.state + "</li>");
      });
    }); // end show contact function

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-state").val("");
//end function
  });


  //  ============================================
  //  form to add additional addresses to existing contact
  $("form#new-work-address").submit(function(event) {
    event.preventDefault();

      $(".work-address").each(function() {
        var inputtedStreet = $(this).find("input.work-street").val();
        var inputtedCity = $(this).find("input.work-city").val();
        var inputtedState = $(this).find("input.work-state").val();
        $("input.work-street").val("");
        $("input.work-city").val("");
        $("input.work-state").val("");

        var workAddress = { street: inputtedStreet, city: inputtedCity, state: inputtedState };
        newContact.addresses.push(workAddress);
      });
  // ============================================
  }); // end new-work-address function

}); // end document function
