<a href="<%= pageRef.url %>" target="_blank" class="Event">
    <% if(imageLoading){%>
        <div>Fetching image...</div>
    <%}else{%>
        <img src="<%= image %>" alt="Preview image">
    <%}%>
    <div class="Event_Description">
        <%= exposition.name %><br>
        <%= getTime(period.startDate) + ' – ' + getTime(period.endDate) %>
    </div>
</a>
