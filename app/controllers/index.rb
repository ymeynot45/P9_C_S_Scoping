#To DO 

# Modify the meals page so the button updates the heading with a random meal from the meals instance variable.
# Can I do this without changing the controller file?


# You Will Know You Are Done When:
# Your code uses a global javascript object provided by the server without requiring an ajax request.


get '/' do
  erb :index
end

get '/skills/:skill' do
  erb :skills
end

get '/meals' do
  @meals = ["Spaghetti",
            "Ravioli",
            "Hummus and Veggies",
            "Pizza",
            "Falafel",
            "Sushi",
            "Linguini",
            "Onigilli"]

  erb :meals
end


