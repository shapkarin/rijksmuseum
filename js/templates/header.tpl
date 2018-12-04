<div class="Header__Cell">
    <div>Date: <%= today %></div>
</div>

<div class="Header__Cell">
    <h3>Change date:</h3>
    <select id="newDate">
        <% for(var i = 0; i < choose.length; i++){%>
            <option value="<%= choose[i] %>" <%= choose[i] === today && 'selected' %> ><%= choose[i] %></option>
        <%}%>
    </select>
</div>

<div class="Header__Cell">
    <h3>Change language:</h3>
    <span class="changeLang <%= lang === 'nl' && 'changeLang_active' %>" data-lang="nl">Nl</span> 
        or 
    <span class="changeLang <%= lang === 'en' && 'changeLang_active' %>" data-lang="en">EN</span>
</div>