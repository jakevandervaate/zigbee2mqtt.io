"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[66736],{244767:(e,t,o)=>{o.r(t),o.d(t,{data:()=>s});const s=JSON.parse('{"key":"v-40a0b496","path":"/devices/E1ACA4ABE38A.html","title":"Sengled E1ACA4ABE38A control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Sengled E1ACA4ABE38A control via MQTT","description":"Integrate your Sengled E1ACA4ABE38A via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2019-07-22T20:08:17.000Z"},"excerpt":"","headers":[{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Light","slug":"light","link":"#light","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1679507150000},"filePathRelative":"devices/E1ACA4ABE38A.md"}')},337775:(e,t,o)=>{o.r(t),o.d(t,{default:()=>m});var s=o(166252);const n=(0,s._)("h1",{id:"sengled-e1aca4abe38a",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#sengled-e1aca4abe38a","aria-hidden":"true"},"#"),(0,s.Uk)(" Sengled E1ACA4ABE38A")],-1),a=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th"),(0,s._)("th")])],-1),i=(0,s._)("tr",null,[(0,s._)("td",null,"Model"),(0,s._)("td",null,"E1ACA4ABE38A")],-1),l=(0,s._)("td",null,"Vendor",-1),d=(0,s._)("tr",null,[(0,s._)("td",null,"Description"),(0,s._)("td",null,"Element downlight smart LED bulb")],-1),r=(0,s._)("tr",null,[(0,s._)("td",null,"Exposes"),(0,s._)("td",null,"light (state, brightness), linkquality")],-1),c=(0,s._)("tr",null,[(0,s._)("td",null,"Picture"),(0,s._)("td",null,[(0,s._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/E1ACA4ABE38A.jpg",alt:"Sengled E1ACA4ABE38A"})])],-1),u=(0,s._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,s.Uk)(" OTA updates")],-1),p=(0,s._)("h2",{id:"options",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,s.Uk)(" Options")],-1),h=(0,s.uE)('<ul><li><p><code>transition</code>: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to <code>0</code> (no transition). The value must be a number with a minimum value of <code>0</code></p></li><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="light" tabindex="-1"><a class="header-anchor" href="#light" aria-hidden="true">#</a> Light</h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness&quot;: &quot;&quot;}</code>.</li></ul><h4 id="transition" tabindex="-1"><a class="header-anchor" href="#transition" aria-hidden="true">#</a> Transition</h4><p>For all of the above mentioned features it is possible to do a transition of the value over time. To do this add an additional property <code>transition</code> to the payload which is the transition time in seconds. Examples: <code>{&quot;brightness&quot;:156,&quot;transition&quot;:3}</code>, <code>{&quot;color_temp&quot;:241,&quot;transition&quot;:1}</code>.</p><h4 id="moving-stepping" tabindex="-1"><a class="header-anchor" href="#moving-stepping" aria-hidden="true">#</a> Moving/stepping</h4><p>Instead of setting a value (e.g. brightness) directly it is also possible to:</p><ul><li>move: this will automatically move the value over time, to stop send value <code>stop</code> or <code>0</code>.</li><li>step: this will increment/decrement the current value by the given one.</li></ul><p>The direction of move and step can be either up or down, provide a negative value to move/step down, a positive value to move/step up. To do this send a payload like below to <code>zigbee2mqtt/FRIENDLY_NAME/set</code></p><p><strong>NOTE</strong>: brightness move/step will stop at the minimum brightness and won&#39;t turn on the light when it&#39;s off. In this case use <code>brightness_move_onoff</code>/<code>brightness_step_onoff</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  <span class="token string-property property">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token comment">// Starts moving brightness down at 40 units per second</span>\n  <span class="token string-property property">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// Stop moving brightness</span>\n  <span class="token string-property property">&quot;brightness_step&quot;</span><span class="token operator">:</span> <span class="token number">40</span> <span class="token comment">// Increases brightness by 40</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',15),g={},m=(0,o(983744).Z)(g,[["render",function(e,t){const o=(0,s.up)("RouterLink");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.kq)(" !!!! "),(0,s.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,s.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,s.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,s.kq)(" !!!! "),n,(0,s._)("table",null,[a,(0,s._)("tbody",null,[i,(0,s._)("tr",null,[l,(0,s._)("td",null,[(0,s.Wm)(o,{to:"/supported-devices/#v=Sengled"},{default:(0,s.w5)((()=>[(0,s.Uk)("Sengled")])),_:1})])]),d,r,c])]),(0,s.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,s.kq)(" Notes END: Do not edit below this line "),u,(0,s._)("p",null,[(0,s.Uk)("This device supports OTA updates, for more information see "),(0,s.Wm)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,s.w5)((()=>[(0,s.Uk)("OTA updates")])),_:1}),(0,s.Uk)(".")]),p,(0,s._)("p",null,[(0,s._)("em",null,[(0,s.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,s.w5)((()=>[(0,s.Uk)("How to use device type specific configuration")])),_:1})])]),h])}]])}}]);