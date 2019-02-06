$(() => {
  
  $(".delete-sample").on("click", (e) => {
    $target = $(e.target);
    const id = $target.attr("data-id");
    console.log(id);

    $.ajax({
      type: "DELETE",
      url: "/delete/" + id,
      success: (response) => {
        console.log("Deleting sample!");
        window.location.href = "/";
      },
      error: (error) => {
        console.log(error);
      }
    });
  });


});