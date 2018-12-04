<a href="<%= pageRef.url %>" target="_blank" class="Event">
    <% if(imageLoading){%>
        <div>Fetching image...</div>
    <%}else{%>
        <img src="<%= image %>" alt="Preview image">
    <%}%>
    <div class="Event_Description">
        <%= exposition.name %><br>
        <% var startDate = moment(period.startDate) %>
        <% var endDate = moment(period.endDate) %>
        <%if(startDate.format('YYYY-MM-DD') === endDate.format('YYYY-MM-DD')){%>
            <%= startDate.format('HH:MM') + ' – ' + endDate.format('HH:MM') %>
        <%}else{%>
            <%= startDate.format('YYYY-MM-DD HH:MM') + ' – ' + endDate.format('YYYY-MM-DD HH:MM') %>
        <%}%>
        (<%= moment.duration(endDate - startDate).humanize() %>)
    </div>
</a>
