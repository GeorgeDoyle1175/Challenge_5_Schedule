
  $(function () {
    // Add a listener for click events on the save button
    $('.saveBtn').on('click', function() {
      // Get the hour-x id of the time-block containing the button
      const id = $(this).closest('.time-block').attr('id');
      console.log(id);
      // Get the user input from the textarea
      const input = $(this).siblings('.description').val();
      // Save the user input in local storage using the id as the key
      localStorage.setItem(id, input);
    });

    // Get the current hour
    const currentHour = dayjs().hour();

    // Apply the past, present, or future class to each time block
    $('.time-block').each(function() {
      var hour = $(this).attr('id').substr(-2);
      console.log(hour);
      if (hour < currentHour) {
        $(this).addClass('past');
      } else if (hour > currentHour) {
        $(this).addClass('future');
      } else {
        $(this).addClass('present');
      }
    });

    // Get any user input that was saved in localStorage and set the values
    // of the corresponding textarea elements
    $('.time-block').each(function() {
      var id = $(this).attr('id');
      var input = localStorage.getItem(id);
      $(this).find('.description').val(input);
    });

    // Display the current date in the header of the page
    $('#currentDay').text(dayjs().format('dddd, MMMM D YYYY'));
  });
