<h2>Today Events</h1>
<div>Date: <%= today %></div>
<br>
<h3>Change date:</h3>
<select id="newDate">
    <% for(var i = 0; i < choose.length; i++){%>
        <option value="<%= choose[i] %>"><%= choose[i] %></option>
    <%}%>
</select>