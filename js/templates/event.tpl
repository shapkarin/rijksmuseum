<a href="<%= pageRef.url %>" class="Event">
    <% if(imageLoading){%>
        <div>Fetching image...</div>
    <%}else{%>
        <img src="<%= image %>" alt="Preview image">
    <%}%>
    <div class="Event_Description">
        <%= exposition.name %><br>
        <%= period.startDate + ' – ' + period.endDate %>
    </div>
</a>
