<h1>Welcome to <%= title %></h1>
<% if(locals.user) { %> 
<section>
    <h4>Create A Tweet! <%= user.name %> </h4>
    <form action="/tweets/create" method="POST">
        <textarea name="content" id="" cols="30" rows="10" placeholder="Your tweet.." required></textarea>
        <input type="submit" value="Create Tweet">
    </form>
</section>
<% } %> 
<div>
    <ul>
        <% for(tweet of tweets) { %>
            <%- include('./tweets/_tweet') %> 
        <% } %>  
    </ul>
</div>

<section>
    <h3>Users</h3>
    <% for(current_user of users) { %> 
        <p>
            <a href="/users/profile/<%= current_user.id %> "><%= current_user.name %></a>
        </p>
    <% } %> 
</section>
<hr>
<%- include('./util/_chat_box') %> 
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.2.0/socket.io.js" integrity="sha512-WL6WGKMPBiM9PnHRYIn5YEtq0Z8XP4fkVb4qy7PP4vhmYQErJ/dySyXuFIMDf1eEYCXCrQrMJfkNwKc9gsjTjA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="/js/chat_engine.js"></script>
<% if(locals.user) { %> 
<script>
    new ChatEngine('chat-input', '<%= locals.user.email %>');
</script>
<% } %> 

<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= title %></title>
   
</head>
<body>
                                                                                                                                                                                                         
    
   
    <h1>Welcome to <%= title %></h1>
   
 
</body>
</html> -->
