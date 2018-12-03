<div class="Event">
    <a href="<%= pageRef.url %>">
        <b><%= exposition.name %></b><br>
        <b><%= period.startDate + ' – ' + period.endDate %></b>
        <% if(imageLoading){%>
            <div>Fetching image...</div>
        <%}else{%>
            <img src="<%= image %>" alt="Preview image">
        <%}%>
    </a>
</div>
