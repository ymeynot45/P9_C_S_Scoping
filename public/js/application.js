$(document).ready(function() {

  $(".meal_teller").click(function() {
    var globalMeal = allMeals[Math.floor(Math.random()*allMeals.length)] ;
    $("#meal_holder").html(globalMeal);
  });

  $('.awesomeness_teller').on('click', function() {
    var subtitle= $(this).data('heading');
    $('#awesomeness_holder').text(subtitle);
  });

  $('.skill_teller').on('click', function() {
    var subtitle = window.location.pathname.split("/")[2];
    $('#skill_holder').text(subtitle)
  });

});

// <% content_for :javascript do %> 
// <script type="text/javascript">
// Event.observe(window, 'load', function(){ 
// js_function(<%= @ruby_array.to_json %>, <%= @ruby_var %>); )}
// </script>
// <% end %>


// - content_for :javascripts_vars do
//   = "var costs_data = #{@records[:cost_mode][:data].to_json}".html_safe
//   = "var graph_data = #{@records[:cost_mode][:graph].to_json}".html_safe
