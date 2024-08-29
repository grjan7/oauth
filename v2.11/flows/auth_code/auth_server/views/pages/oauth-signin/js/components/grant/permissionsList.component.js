'use strict'

import { Component } from 'lib/component.class.js'

const permissions = ["user:read", "user:add", "user:delete"]
const permissionsList = permissions.map(permission => `<li class="permission">${permission}</li>`).join("\n")

const template = `
  <div id="permissions-list-component">
    <ul>
    ${permissionsList}
    </ul>
  </div>`

const style = `
.permission {
  color: #525286;
  padding: 5px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
`
const permissionsListComponent = new Component({ template, style })

export default permissionsListComponent