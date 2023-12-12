(function ($) {
  $.fn.NimbleGrid = function (config) {
    const plugin_dom_obj = this[0];
    const conf = {
      //rtd equals rows to display
      rtd: 15,
      icons: {
        ascending:
          "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAcAAAAECAMAAAB1GNVPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADNQTFRF1NTUfX190dHRtLS0l5eXQEBAR0dH1dXVREREr6+v2dnZn5+fbGxseXl5RkZGzMzM////BUSGAAAAABF0Uk5T/////////////////////wAlrZliAAAAJklEQVR42mIQEBBgA2IGAQEORh4QzcrLycwtwMDHwsTPwMUOEGAAFi0BOZt2IEwAAAAASUVORK5CYII=",
        descending:
          "data:image/png;base64,  iVBORw0KGgoAAAANSUhEUgAAAAcAAAAECAMAAAB1GNVPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADBQTFRFfX19xMTEbW1ttLS0jo6OREREr6+vycnJj4+Pubm5jIyMlpaWsLCwoKCg1NTU////gVMa/AAAABB0Uk5T////////////////////AOAjXRkAAAAmSURBVHjaYmBl4GLhZeNh4Gfi5mTn42fg5+dg5OMH0fzMQAwQYAAQZgEsd9uAdAAAAABJRU5ErkJggg==",
        neutral:
          "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAFJJREFUWEft08EVABAMBNHRGZVTmqtDrqzDKCA2/2Ub4dfC/2MABb4UmEC/1I4FjHN2JRAPcGn5euyXN6CAAvEaxgN4AwooEK9hPIA3oIACTwU2v58MIZifSLoAAAAASUVORK5CYII=",
        next: "data:image/png;base64, R0lGODlhEAAQAMQRACRIkChNli1TnjNZpjhgrz9otx1m9S9kzy9l0zBiyD5z2yRq8ixx7jRy6ERvwEp1yE970P///1OA1lOE3VWF3liH30+K9k+J/VeH4F+M4Wec+2ic+YWu/4iu/6K9/6W//yH5BAEAABEALAAAAAAQABAAAAU2YCSOZGmeqIilppSxJPS9cPRoX1U7F/dRsMJF0/FMWASGRaOADRaNQ01gSNQiAcQ1Ath6v7UQADs=",
        prev: "data:image/png;base64, R0lGODlhEAAQAMQfAF+M4aW//1WF3lOE3Sxx7h1m9S9kz4iu/y1Tnk970CRq8jhgr6K9/0+K9oWu/yRIkC9l0zBiyERvwD5z20p1yDNZpliH31OA1leH4D9ot2ib/TRy6Gic+UeE+yhNlv///yH5BAEAAB8ALAAAAAAQABAAAAU34CeOZGmeaImlJXCxIxAk8GcFGgULgdNIrAHjwOlkYBNOg7CoGTaKSu0TKSCmH4gH+3lwv2BTCAA7",
        last: "data:image/png;base64, R0lGODlhEAAQAMQNACRIkC1TnjNZpj9otyxm2Dhu3D913Sxx7kRvwEJt1Ep1yEh630574f///1OA1lGD4VaE6V+L4GCM5GiU5W+W7G2Z5mec+3Ga536f7oKg542r8Iiu/5a076G+8KK9/6rE7yH5BAEAAA0ALAAAAAAQABAAAAVZYCOOZGme52Ve2WRWUVl9jzl58Th1jil5m8RIwumVIhyLRdiIaBSmh8ZyIAgaDwzCtLhUAaIFZWAyPAhgkYFyLRUSaVFB0iahSwRIwETgM+IoInCAgYWGDSEAOw==",
        first:
          "data:image/png;base64, R0lGODlhEAAQAMQNACRIkC1TnjNZpj9otyxm2Dhu3D913Sxx7kRvwEJt1Ep1yEh630574f///1OA1lGD4VaE6V+L4GCM5GiU5W+W7G2Z5mec+3Ga536f7oKg542r8Iiu/5a076G+8KK9/6rE7yH5BAEAAA0ALAAAAAAQABAAAAVWYCOOZGme55RdJls+X1VGcul0Exl5uc1Jo8TGAywpNBFRwmLhJEsIzKMhIBwsmmlpQFmIANaLtySgGEbgx5ksKZAACXcpACGUwCYAw17iv+EogYKDJCEAOw==",
      },
      grid_mode: "pagination",
      style: {
        //css relating to table
        row_color: ["background-color: #ffffff"],
        alt_color: ["background-color: #dddddd"],
        row_hov_color: ["background-color: #679CFB"],
        ultimate_parent_container: [
          "display: flex;",
          "justify-content: center;",
        ],
        scroll_mode: ["overflow-y: scroll"],
        grid_container: [
          "background-color: #fff",
          "overflow-x: auto;",
          "width: 100%;",
        ],
        table: [
          "font-family: sans-serif;",
          "border-collapse: collapse;",
          "table-layout: fixed;",
          "width: 100%;",
        ],
        cell: [
          "padding: 5px 0;",
          "font-size: 10px;",
          "overflow: hidden;",
          "white-space: nowrap;",
          "text-overflow: ellipsis;",
          "position: relative;",
        ],
        header_cell_icons: [
          "position: absolute;",
          "top: 0;",
          "left: 50%;",
          "visibility: hidden;",
        ],
        larger_width_cell: [],
        context_menu: [
          "background-color: white;",
          "z-index: 999;",
          "border: 1px solid black;",
        ],
        // context_menu_opt: ["padding: .75em;", "font-size: .75em;"],
        cutoff_div: [
          "border: 1px solid black",
          "background-color: white;",
          "padding: 5px;",
          "font-size: 10px;",
          "line-height: 15px;",
          "position: absolute",
          "overflow: visible;",
          "z-index: 999;",
        ],
        // header_img: [
        //   "width: 15px;",
        //   "height: auto;",
        //   "opacity: 0.5;",
        //   "margin-left: 1em;",
        // ],

        //css relating to header
        header_container: [
          "max-height: 10%;",
          "display: flex;",
          "align-items: center;",
          "justify-content: right;",
          "margin: 8px 0;",
        ],
        search_ddl: ["cursor: pointer;", "border: 2px solid black;"],
        sddl_opt: ["cursor: pointer;"],
        larger_width_search_container: [],
        search_bar: ["border: 2px solid black;", "border-radius: 0;"],
        larger_width_search_bar: [],
        label: ["margin: 0;", "font-size: 12px;"],
        container: ["margin: 0 10px;"],
        larger_width_search_icon: [],
        //css relating to footer
        center_child_elems: [
          "display: flex;",
          "align-items: center;",
          "justify-content: center;",
        ],
        footer_container: ["display: flex;", "padding: 6px 18px;"],
        larger_width_footer_container: [],
        pager_cont: [
          "display: flex;",
          "align-items: center;",
          "font-size: 12px",
        ],
        larger_width_pager_cont: [],
        pager_butts: ["width: 10px;"],
        entries_container: ["text-align: center;", "font-size: 12px"],
        larger_width_entries_container: [],
        pag_tb: [
          "font-size: 12px",
          "width: 30px;",
          "height: 8px;",
          "padding: 6px;",
          "margin: 0 6px;",
          "border: 1.5px solid black;",
          "border-radius: 5px;",
          "text-align: center;",
        ],
        reset_butt: ["font-size: 12px;", "padding: 5px"],
        spacing: ["margin: 0 6px;", " cursor: pointer;"],
        cancel_butt: [
          // "font-size: .8em",
          // "border: 1px solid black",
          // "border-radius: .5em;",
          // "padding: .5em;",
          // "margin: 1em .5em;",
          // "width: auto",
          // "text-align: center;",
          // "background-color: white",
        ],
        save_butt: [
          // "font-size: .8em",
          // "padding: .5em;",
          // "margin: 1em .5em;",
          // "border-radius: .5em",
          // "width: auto;",
          // "text-align: center;",
          // "border: 1px solid black;",
          // "background-color: white",
        ],
        save_butt_hov: ["background-color: #518cfb"],
        //a = add
        a_butt_hov_eff: ["background-color: #dddddd;", " color: #000;"],
        //c = current
        c_butt_hov_eff: ["background-color: black;", " color: #fff"],
        //r = remove
        r_butt_hov_eff: ["background-color: #ffffff;", " color: #000;"],
        bot_row_headers: [
          "text-align: left;",
          "padding: 5px 10px;",
          "font-size: 12px;",
        ],
      },
    };
    if (arguments.length > 0) {
      $.extend(true, conf, config);
    }
    //add event listeners that will change the cursor depending on whether the ctrl key is being held or not
    document.addEventListener("keydown", function (event) {
      if (event.key === "Control") {
        css(["cursor: pointer;"], plugin_dom_obj);
      }
    });
    document.addEventListener("keyup", function (event) {
      if (event.key === "Control") {
        css(["cursor: auto;"], plugin_dom_obj);
      }
    });

    //child_el = child element
    const append_child = (child_el, parent, id) => {
      const child = document.createElement(child_el);
      parent.appendChild(child);
      if (typeof id != "undefined") {
        child.setAttribute("id", id);
      }
      return child;
    };

    const grid_mde = () => {
      return {
        set: function (mode) {
          if (mode === "scroll") {
            css(conf.style.scroll_mode, plugin_dom_obj);
            footer_container.style.display = "none";
          } else if (mode === "pagination") {
            //responsive_design();
            set_pagination_nums();
          } else {
            alert(
              "Invalid argument object property: Use 'scroll' or 'pagination' instead of '" +
                mode +
                "' for grid_mode property."
            );
            plugin_dom_obj.removeChild(grid_parent_container);
          }
        },
      };
    };

    const set_pagination_nums = () => {
      //dataset is displayed correctly, even though first_entry_index is off by one? To prevent further issues, displaying a different variables variable in entries_container
      let fe_idx = first_entry_index;
      //add an ADD operator here that checks to see if pagination or window resize triggered this function
      if (fe_idx != 1) {
        fe_idx = first_entry_index + 1;
      }
      let last_entry_index = first_entry_index + conf.rtd;
      if (first_entry_index + conf.rtd > tabledata_len) {
        last_entry_index = tabledata_len;
      }
      entries_container.innerText =
        fe_idx + " - " + last_entry_index + " of " + tabledata_len + " entries";

      //set page number
      tot_pgs.innerText = "of " + num_of_pages;
    };

    const mode = function () {
      let mode = false;

      return {
        set: function (bool) {
          mode = bool;
        },
        get: function () {
          return mode;
        },
      };
    };

    const self = this;
    self.sort_by = null;
    let curr_page = 1;
    let first_entry_index = 0;
    let last_entry_index;
    let tabledata_len;
    let pag_tb;
    let tot_pgs;
    let entries_container;
    let pager_cont;
    let cancel_butt;
    let save_butt;
    let bef_aft_obj = {};
    let search_bar;
    let reset_butt;
    let export_butt;
    const grid_mode = grid_mde();
    const search_mode = mode();
    let sf_idx;
    let default_sf = "All"; //sf equals search filter

    function Search(grid_container, headers_arr) {
      var self = this; //have to use 'var' as variable type because it wasn't available in the public methods otherwise
      this.ddls = [];
      const container_div = grid_container;

      let raw_data = [];
      //get a copy of raw data from data adapter
      conf.data_adapter.load(function (data) {
        raw_data = data.rows;
      });
      let ddl_filtrations = raw_data;

      //create all components of header EXCEPT ddl(s)
      const header_container = document.createElement("div");
      header_container.setAttribute("id", "header_container");
      grid_container.prepend(header_container);
      css(conf.style.header_container, header_container);

      //make header_container invisible until data comes back from async call
      header_container.style.visibility = "hidden";

      //create search bar
      const search_container = append_child(
        "div",
        header_container,
        "search_container"
      );
      css(conf.style.label_container, search_container);

      const search_label = append_child("h3", search_container, "search_label");
      search_label.innerText = "Search:";
      css(conf.style.header_container_labels, search_label);

      search_bar = append_child("input", search_container, "search_bar");
      css(conf.style.search_bar, search_bar);
      //eliminate highlight on focus
      search_bar.addEventListener("focus", function () {
        search_bar.style.outline = "none";
      });
      search_bar.addEventListener("input", function () {
        if (this.value.length > 0) {
          search_mode.set(true);
        } else {
          search_mode.set(false);
        }
        ddl_filtration(ddl_filtrations);
      });

      function deepEqual(obj1, obj2) {
        if (obj1 === obj2) return true;

        if (!(obj1 instanceof Object) || !(obj2 instanceof Object))
          return false;

        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);

        if (keys1.length !== keys2.length) return false;

        return keys1.every((key) => deepEqual(obj1[key], obj2[key]));
      }

      const find_matching_elements = function (array1, array2) {
        let smaller_array, larger_array;
        let res = [];
        if (array1.length < array2.length) {
          smaller_array = array1;
          larger_array = array2;
        } else {
          smaller_array = array2;
          larger_array = array1;
        }

        for (const element of smaller_array) {
          if (
            larger_array.find((obj) => deepEqual(obj, element)) !== undefined
          ) {
            res.push(element);
          }
        }
        return res;
      };

      const ddl_options = function (ddl, unique_data) {
        if (!Array.isArray(unique_data)) {
          unique_data = Object.keys(unique_data);
        }

        for (const option of unique_data) {
          const sddl_option = append_child("option", ddl, option + "_option");
          sddl_option.innerText = option;
        }

        //add 'all' option to ddl
        // const all_option = document.createElement("option");
        // all_option.setAttribute("id", "all_option");
        // all_option.innerText = "All";
        // ddl.insertBefore(all_option, ddl[0]);
        // ddl.selectedIndex = 0;
      };

      const ddl = function (unique_data, ddl_label) {
        const ddl_container = append_child("div", header_container);
        css(conf.style.label_container, ddl_container);

        const label = append_child("h3", ddl_container);
        css(conf.style.header_container_labels, label);
        label.innerHTML = ddl_label + ": ";
        const ddl = append_child("select", ddl_container);
        css(conf.style.search_ddl, ddl);
        ddl.addEventListener("change", function () {
          if ((ddl.value = "All")) {
          }

          ddl_filtrations = find_matching_elements(
            ddl_filtrations,
            unique_data[ddl.value]
          );
          ddl_filtration(ddl_filtrations);
        });
        ddl_options(ddl, unique_data);

        self.ddls.push(ddl);
        return ddl;
      };

      this.ddl = function (header_index, ddl_label) {
        conf.data_adapter.load(function (data) {
          let unique_data = { All: raw_data };
          const rows = data.rows;

          for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            const cell = row.cell[header_index];

            // if (!unique_data.includes(cell)) {
            //   unique_data.push(cell);
            // }

            if (!unique_data.hasOwnProperty(cell)) {
              unique_data[cell] = [];
            }
            unique_data[cell].push(row);
          }

          const new_ddl = ddl(unique_data, ddl_label);
          new_ddl.selectedIndex = 0;
        });
      };

      this.header_on = function () {
        header_container.style.visibility = "visible";
      };

      this.header_off = function () {
        header_container.style.visibility = "hidden";
      };

      //create default ddl
      let headers_obj = { All: raw_data };
      for (const header of headers_arr) {
        headers_obj[header] = raw_data;
      }
      const default_ddl = ddl(headers_obj, "Column");

      return this;
    }

    const create_header = () => {
      //create header
      grid_container = append_child("div", plugin_dom_obj, "grid_container");
      css(conf.style.grid_container, grid_container);
      header_container = append_child(
        "div",
        grid_container,
        "header_container"
      );
      css(conf.style.header_container, header_container);

      //make header_container invisible until data comes back from async call
      self.header_container = header_container;
      self.header_container.style.visibility = "hidden";

      //create default ddl
      const ddl_container = append_child("div", header_container);
      css(conf.style.container, ddl_container);

      const ddl_label = append_child("h3", ddl_container);
      ddl_label.innerHTML = "Column:";
      css(conf.style.label, ddl_label);

      self.search_ddl = append_child("select", ddl_container, "search_ddl");
      css(conf.style.search_ddl, self.search_ddl);

      self.search_ddl.addEventListener("change", function () {
        default_sf = this.value;
        //if there is a search currently in the textbox, need to call highight_on_search function for an accurate response/filter
        if (search_mode.get()) {
          filter_rows();
        }
      });

      const sddl_option = append_child("option", self.search_ddl, default_sf);
      sddl_option.innerText = default_sf;

      //create search bar
      self.search_container = append_child(
        "div",
        header_container,
        "search_container"
      );
      css(conf.style.container, self.search_container);

      self.search_icon = append_child(
        "h3",
        self.search_container,
        "search_icon"
      );
      self.search_icon.innerText = "Search:";
      css(conf.style.label, self.search_icon);
      // self.search_icon = append_child(
      //   "img",
      //   self.search_container,
      //   "search_icon"
      // );
      // self.search_icon.setAttribute("src", conf.icons.search);

      search_bar = append_child("input", self.search_container, "search_bar");
      css(conf.style.search_bar, search_bar);
      //eliminate highlight on focus
      search_bar.addEventListener("focus", function () {
        search_bar.style.outline = "none";
      });
      search_bar.addEventListener("input", function () {
        if (this.value.length > 0) {
          search_mode.set(true);
        } else {
          search_mode.set(false);
        }
        filter_rows();
      });
    };

    const filter_rows = () => {
      conf.data_adapter.load(function (data) {
        if (typeof data !== "undefined") {
          //filter rows based on search bar value
          const typed_text = search_bar.value.toLowerCase();
          const rows = data.rows;
          let search_matches = [];
          let row;

          sf_idx = self.headers_arr.indexOf(default_sf); //sf equals search filter

          for (let i = 0; i < rows.length; i++) {
            row = rows[i];
            const cell = row.cell[sf_idx];
            if (sf_idx > -1) {
              let index;
              try {
                index = cell.toString().toLowerCase().indexOf(typed_text);
              } catch {}

              if (index > -1 || typed_text === "") {
                search_matches.push(row);
              }
            } else {
              for (let cell of row.cell) {
                let index;
                try {
                  index = cell.toString().toLowerCase().indexOf(typed_text);
                } catch {}

                if (index > -1 || typed_text === "") {
                  search_matches.push(row);
                  break;
                }
              }
            }
          }
          num_of_pages = Math.ceil(search_matches.length / conf.rtd);
          populate_table(search_matches);
        }
      });
    };

    const is_integer = (str) => {
      // Check if the string contains only numeric characters
      if (/^[0-9]+$/.test(str)) {
        // Parse the string and check if it's a valid integer
        const int_val = parseInt(str);
        return !isNaN(int_val);
      }
      return false;
    };

    const iterate_through_cells = (cells, conf_prop) => {
      for (const cell of cells) {
        const cell_child = cell.children[0];
        css(conf_prop, cell_child);
      }
    };

    const responsive_design = () => {
      const cells = plugin_dom_obj.querySelectorAll("#cell_cont");
      //grid cells media defaults
      // cell_max_width();

      //apply extra css in media query like fashion
      if (plugin_dom_obj.offsetWidth > 414) {
        //footer container media queries
        css(conf.style.larger_width_entries_container, entries_container);
        css(conf.style.larger_width_pager_cont, pager_cont);
        css(conf.style.center_child_elems, footer_container);
        css(conf.style.larger_width_footer_container, footer_container);
        //header container media queries
        css(conf.style.larger_width_search_bar, search_bar);
        css(conf.style.larger_width_search_container, self.search_container);
        css(conf.style.larger_width_search_icon, self.search_icon);
        //grid cells media queries
      }
      // uncompress_col_headers(cells); //causing a break in the app, so commenting out for now
    };

    const uncompress_col_headers = (cells) => {
      // check if any of the headers are cut off, and if so, increase the max-width for that column
      let header_cells = [].slice.call(cells); //convert NodeList to array
      header_cells = header_cells.splice(0, tot_num_cols);
      let compressed_headers = {};
      let idx = 0;
      for (const cell of header_cells) {
        const cell_child = cell.children[0];
        // if any of the headers are cut off, readjust cell max-width here
        do {
          let max_width = parseInt(cell_child.style.maxWidth);
          max_width = Math.ceil(max_width * 1.1);
          cell_child.style.maxWidth = max_width + "vw";
          compressed_headers[idx] = max_width;
        } while (cell_child.scrollWidth > cell_child.parentElement.clientWidth);
        idx++;
      }
      //comp_idx equals compressed indexe
      for (let comp_idx in compressed_headers) {
        comp_idx = parseInt(comp_idx);
        //corr_mw = corrresponding max width
        const corr_mw = compressed_headers[comp_idx];
        for (const row of table.rows) {
          //iterate through the rows and modify the max_width for cells at index 'i'
          const des_width = corr_mw + "vw"; // des_width = desired width
          try {
            let cell_to_modify =
              row.cells[comp_idx].querySelector("#cell_cont").children[0];
            cell_to_modify.style.maxWidth = des_width;
          } catch {
            //if the code hits this catch block, it's because the row is bot_row_headers, which does not contain the same child elements as the other rows
            row.cells[comp_idx].style.maxWidth = des_width;
          }
        }
      }
      compressed_headers = {};
    };

    const create_footer = (tabledata) => {
      //create footer and append it to table container div
      footer_parent_container = append_child(
        "div",
        grid_container,
        "footer_parent_container"
      );
      css(conf.style.center_child_elems, footer_parent_container);
      footer_container = append_child(
        "div",
        footer_parent_container,
        "footer_container"
      );
      css(conf.style.center_child_elems, footer_container);
      css(conf.style.larger_width_footer_container, footer_container);

      //make footer invisible until data comes back from async call
      self.footer_container = footer_container;
      self.footer_container.style.visibility = "hidden";

      // css(["display: block"], footer_container); //used for mobile responsive design
      add_pager_divs();
      reset_export();
    };

    let prev_butt;
    let next_butt;
    let first_butt;
    let last_butt;
    let edit_butts_cont;

    const add_pager_divs = () => {
      //create entries div and append it to footer
      entries_container = append_child(
        "div",
        footer_container,
        "entries_container"
      );
      css(conf.style.entries_container, entries_container);
      css(conf.style.larger_width_entries_container, entries_container);

      pager_cont = append_child("div", footer_container, "pager_cont");
      css(conf.style.pager_cont, pager_cont);
      css(conf.style.larger_width_pager_cont, pager_cont);

      first_butt = append_child("button", pager_cont, "first_butt");
      const fir_butt_img = append_child("img", first_butt);
      fir_butt_img.setAttribute("src", conf.icons.first);
      css(conf.style.pager_butts, fir_butt_img);
      css(conf.style.spacing, first_butt);

      prev_butt = append_child("button", pager_cont, "prev_butt");
      const prev_butt_img = append_child("img", prev_butt);
      prev_butt_img.setAttribute("src", conf.icons.prev);
      css(conf.style.pager_butts, prev_butt_img);
      css(conf.style.spacing, prev_butt);

      const txt = append_child("p", pager_cont);
      txt.innerText = " Page ";

      pag_tb = append_child("input", pager_cont, "pag_tb");
      css(conf.style.pag_tb, pag_tb);
      pag_tb.value = "1";

      tot_pgs = append_child("p", pager_cont, "tot_pgs");

      next_butt = append_child("button", pager_cont, "next_butt");
      const next_butt_img = append_child("img", next_butt);
      next_butt_img.setAttribute("src", conf.icons.next);
      css(conf.style.pager_butts, next_butt_img);
      css(conf.style.spacing, next_butt);

      last_butt = append_child("button", pager_cont, "last_butt");
      const last_butt_img = append_child("img", last_butt);
      last_butt_img.setAttribute("src", conf.icons.last);
      css(conf.style.pager_butts, last_butt_img);
      css(conf.style.spacing, last_butt);

      pag_tb.value = curr_page;

      //add cancel and save buttons
      edit_butts_cont = append_child(
        "div",
        footer_container,
        "edit_butts_cont"
      );
      css(conf.style.center_child_elems, edit_butts_cont);
      edit_butts_cont.style.display = "none";

      cancel_butt = append_child("div", edit_butts_cont, "cancel_butt");
      cancel_butt.innerText = "Cancel";
      css(conf.style.spacing, cancel_butt);
      css(conf.style.cancel_butt, cancel_butt);
      cancel_butt.addEventListener("click", function () {
        //iterate through bef_aft_obj, and for each cell remove the input textbox and add text back to cell
        for (const el_id in bef_aft_obj) {
          //get the el
          const el = document.getElementById(el_id);
          const cell_tb = document.getElementById(el_id + "_tb");
          cell_tb.style.display = "none";
          el.innerText = bef_aft_obj[el_id];
        }
        edit_mode_off();
      });

      save_butt = append_child("div", edit_butts_cont, "save_butt");
      save_butt.innerText = "Save";
      css(conf.style.spacing, save_butt);
      css(conf.style.save_butt, save_butt);
      save_butt.addEventListener("click", function () {
        //iterate through bef_aft_obj, and for each cell remove the input textbox and add text back to cell
        for (let el_id in bef_aft_obj) {
          let row_num = extract_row_num(el_id);
          //get the needed elements / values
          const el = document.getElementById(el_id);
          const cell_tb = document.getElementById(el_id + "_tb");
          const tb_val = cell_tb.value;
          //edit the content as needed
          cell_tb.style.display = "none";
          el.innerText = tb_val;
          el.setAttribute("id", row_num + "_" + tb_val);

          //update rows_arr
          const row_in_q = rows_arr[row_num];
          for (let i = 0; i < row_in_q.length; i++) {
            let elem_in_q = row_in_q[i];
            if (elem_in_q === bef_aft_obj[el_id]) {
              //modify the content in rows_arr
              rows_arr[row_num][i] = tb_val;
            }
          }
        }
        edit_mode_off();
      });
    };

    const extract_row_num = function (id) {
      const _idx = id.indexOf("_");
      return parseInt(id.slice(0, _idx));
    };

    const reset_export = function () {
      const container = append_child(
        "div",
        footer_container,
        "butts_container"
      );
      css(["margin: 0 10px"], container);
      reset_butt = append_child("button", container, "reset_butt");
      css(conf.style.reset_butt, reset_butt);

      reset_butt.innerText = "Reset";
      reset_butt.addEventListener("click", function () {
        search_mode.set(false);
        search_bar.value = "";
        default_sf = "All";
        self.search_ddl.value = "All";
        for (const header in self.header_info) {
          self.header_info[header].ascending = false;
        }
        if (self.sortedBy_icon) {
          self.sortedBy_icon.style.visibility = "hidden";
          self.sortedBy_icon = undefined;
        }
        self.sort_by = null;
        rows_arr = [];
        pagination_active(1);
      });
      /*           export_butt = append_child("button", container, "export_butt");
                        export_butt.innerText = "Export";*/
    };

    const edit_mode_off = (clicked_butt) => {
      //since bef_aft_obj will only have 1 property at a time, grab the first key in bef_aft_obj, which will be an integer representing a row number
      const edited_row = document.getElementById(
        "row_" + extract_row_num(Object.keys(bef_aft_obj)[0])
      );
      reset_row_backgrounds(edited_row);
      change_alignment("left", edited_row);

      //wipe the object clean
      bef_aft_obj = {};

      edit_mode.set_mode(false);
    };

    const error_handling = () => {
      if (is_integer(pag_tb.value)) {
        //check to see if the page number is in bounds
        const tb_val = parseInt(pag_tb.value);
        if (tb_val >= 1 && tb_val <= num_of_pages) {
          pagination_active(pag_tb.value);
          return;
        }
        alert("Input value out of bounds. Please retry.");
      } else {
        alert("Invalid input. Please retry.");
      }
      pag_tb.focus();
    };

    const counter = () => {
      //initialize a static variable
      let count = 0;

      //return a function that can access and modify the static variable
      return {
        get_count: function () {
          return count;
        },
        set_count: function (new_count) {
          count = new_count;
        },
        increment: function () {
          count++;
        },
        decrement: function () {
          count--;
        },
        reset: function () {
          count = 0;
        },
      };
    };

    const edit_mde = () => {
      //initialize a static variable
      let edit_mode = false;
      let row;

      //return a function that can access and modify the static variable
      return {
        get_mode: function () {
          return edit_mode;
        },
        set_mode: function (bool) {
          edit_mode = bool;
          if (!edit_mode) {
            css(["background-color: #fff;"], grid_container);
          } else {
            css(conf.style.row_hov_color, grid_container);
            css(["background-color: #fff;"], bott_row_headers);
            css(["background-color: #fff;"], self.search_icon);
          }
          edit();
        },
        set_edit_row: function (curr_row) {
          row = curr_row;
        },
        get_edit_row: function () {
          return row;
        },
      };
    };

    const window_sze = () => {
      let prev_width, prev_height;

      return {
        set: function (curr_width, curr_height) {
          prev_width = curr_width;
          prev_height = curr_height;
        },
        prev_height: function () {
          return prev_height;
        },
        prev_width: function () {
          return prev_width;
        },
      };
    };

    let rows_arr = [];
    let excess_cols = [];
    let excess_rows = [];
    let cols_ascending = {};
    let bott_row_headers;
    let table_name;
    let table;
    let grid_container;
    let header_container;
    let footer_parent_container;
    let footer_container;
    let num_of_pages;
    let tot_num_cols;
    let table_cont;
    let tabledata_rows;
    let ord_ro_obj;
    let ord_bind_obj = {};
    let ord_name_obj = {};
    let load_grid_called = false;
    const background_count = counter();
    const compressed_num_of_cols = counter();
    const header_click = counter();
    const window_size = window_sze();
    const edit_mode = edit_mde();
    this.headers_arr;
    this.header_info = {};

    //elem = element
    const css = (property, elem) => {
      for (const css of property) {
        elem.style.cssText += css;
      }
    };

    const float = function (arg) {
      arg = int(arg);
      return parseFloat(arg.toFixed(2));
    };

    const int = function (arg) {
      arg = parseInt(arg);
      if (isNaN(arg)) {
        return 0;
      }
      return parseInt(arg);
    };

    const populate_table = (tabledata_rows) => {
      //sort rows if self.sort_by is not null(this indicates a header cell was clicked on)
      if (self.sort_by !== null) {
        let switching, i, x, y, shouldSwitch;
        switching = true;
        const column_info = self.header_info[self.sort_by];
        const rows = tabledata_rows;

        while (switching) {
          switching = false;

          for (i = 0; i < rows.length - 1; i++) {
            shouldSwitch = false;
            x = rows[i].cell[self.sort_by];
            y = rows[i + 1].cell[self.sort_by];
            if (column_info.type === "int") {
              //int method includes precautions in case x or y is NaN(not a number)
              x = int(x);
              y = int(y);
            } else if (column_info.type === "float") {
              //float method includes precautions in case x or y is a whole number
              x = float(x);
              y = float(y);
            }
            //using a conditional operator to determine whether the rows need to be shifted
            let condition = column_info.ascending ? x > y : x < y;
            if (condition) {
              shouldSwitch = true;
              break;
            }
          }
          if (shouldSwitch) {
            const popped_row = rows.splice(i + 1, 1)[0];
            rows.splice(i, 0, popped_row);
            switching = true;
          }
        }
        //responsive_design();
      }

      //remove all rows from table
      const table_rows = table.rows;
      while (table_rows.length > 1) {
        table.removeChild(table_rows[table_rows.length - 1]);
      }

      background_count.set_count(1);
      //break the incoming json down into its seperate parts
      tabledata_len = tabledata_rows.length;
      tabledata_rows = tabledata_rows.slice(
        first_entry_index,
        first_entry_index + conf.rtd
      );
      tabledata_rows.forEach((row, idx) => {
        const row_dobj = add_row(row);
        row_dobj.addEventListener("click", function (event) {
          if (!event.ctrlKey && !edit_mode.get_mode()) {
            if (typeof conf.on_row_click === "function") {
              conf.on_row_click(parseInt(this.id));
            }
          }
        });
      });
      set_pagination_nums();

      // bot_row_headers();
    };

    const num_invisible_rows = () => {
      let count = 0;
      for (const row of table.rows) {
        if (row.style.display === "none") {
          count++;
        }
      }
      return count;
    };

    const cell_max_width = () => {
      //determine max-width for each cell
      const headers_row = table.rows[0];
      num_vis_cols = 0;
      let headers_offsetWidth = 0;
      const target_width = grid_container.offsetWidth;

      for (const header of headers_row.cells) {
        num_vis_cols++;
        headers_offsetWidth += header.offsetWidth;
        if (headers_offsetWidth > target_width) {
          break;
        }
      }

      //for whatever reason, cannot apply a % width to cells, it has to be in 'vw'. So have to calculate vw based off of the width of the plugin parent container
      const plugin_to_window_width =
        (plugin_dom_obj.offsetWidth / document.body.offsetWidth) * 100;
      const max_cell_width = plugin_to_window_width / num_vis_cols;

      conf.style.cell.push("max-width:" + max_cell_width + "vw");
      conf.style.larger_width_cell.push("max-width:" + max_cell_width + "vw");
    };

    const compress_excess_rows = () => {
      excess_rows = [];
      const table_rows = table.rows;
      let bott_row_count = table_rows.length - 2;
      while (grid_container.offsetHeight > plugin_dom_obj.offsetHeight) {
        //make the bottom most row invisible
        const bott_row = table_rows[bott_row_count];
        bott_row.style.display = "none";
        bott_row_count--;
        excess_rows.unshift(bott_row);
      }

      conf.rtd = bott_row_count;
      //update rows_arr
      rows_arr = [];
      for (const row of table_rows) {
        if (row.style.display !== "none") {
          let row_arr = [];
          for (const cell of row.cells) {
            row_arr.push(cell.innerText);
          }
          rows_arr.push(row_arr);
        }
      }
      last_entry_index = rows_arr.length - 2;
      num_of_entries = last_entry_index - first_entry_index + 1;
    };

    const bot_row_headers = () => {
      const tr = append_child("tr", table, "bot_row_headers");
      bott_row_headers = tr;
      const headers = table.rows[0];
      for (const header of headers.cells) {
        const th = append_child("th", tr);
        th.innerText = header.innerText;
        css(conf.style.bot_row_headers, th);
      }
    };

    //elem = element
    const set_row_background_color = (elem) => {
      background_count.increment();
      const count = background_count.get_count();
      if (count % 2 != 0) {
        css(conf.style.row_color, elem);
      } else {
        css(conf.style.alt_color, elem);
      }
    };

    const edit = () => {
      if (edit_mode.get_mode()) {
        for (const child of footer_container.children) {
          child.style.display = "none";
        }
        edit_butts_cont.style.display = "flex";
      } else {
        for (const child of footer_container.children) {
          child.style.display = "flex";
        }
        edit_butts_cont.style.display = "none";
      }
      //responsive_design();
    };

    const change_alignment = function (position, row) {
      for (const td of row.cells) {
        const cell_cont = td.children[0];
        css(conf.style.center_child_elems, cell_cont);
        css(["justify-content: " + position + ";"], cell_cont);
      }
    };

    const add_inputs_to_row = (el, row_num) => {
      const row = el.parentElement.parentElement.parentElement;
      if (!row.querySelector("input")) {
        edit_mode.set_mode(true);
        reset_row_backgrounds(row);

        for (let i = 0; i < row.cells.length; i++) {
          if (ord_ro_obj[i]) {
            continue;
          }
          const cell = row.cells[i].children[0].children[0];
          const id = cell.id;

          //save cell's content to bef_aft_obj
          bef_aft_obj[[id]] = cell.innerText;

          //grab the width of the cell prior to adding in the tb
          const cell_width = cell.parentElement.offsetWidth * 0.9;

          cell.innerText = "";

          //create, append, and adjust textbox into cell
          const cell_tb = document.createElement("input");
          cell_tb.setAttribute("id", id + "_tb");
          css(["padding: 0;"], cell);
          css(
            [
              "width: " + cell_width + "px",
              "font-size: inherit;",
              "height: inherit;",
            ],
            cell_tb
          );
          cell.appendChild(cell_tb);
          cell_tb.addEventListener("click", function () {
            cell_tb.select();
          });
          cell_tb.value = bef_aft_obj[id];

          if (id === el.id) {
            cell_tb.select();
          }
        }
        change_alignment("center", row);
      }
    };

    const add_row = (row_arr, headers_arr) => {
      //update rows_arr every time array is added
      const cells = row_arr.cell;
      if (cells) {
        row_arr = cells;
      }

      rows_arr.push(row_arr);
      const tr = document.createElement("tr");

      //add cells to 'tr', if they are included in the listed columns of the 'columns' property in the config object
      const cols_obj = conf.data_adapter.columns;
      for (let i = 0; i < cols_obj.length; i++) {
        //create and add cell to table row
        let txt = row_arr[i];
        if (txt) {
          txt = txt.toString();
        } else {
          txt = "";
        }
        const td = create_cell(i, txt, row_arr, headers_arr, tr);
        td.style.width = cols_obj[i].width + "px"; //apply cell width from corresponding column object
        td.style.textAlign = cols_obj[i].align; //apply align from corresponding column object
        tr.appendChild(td);
      }
      tr.setAttribute("id", table.rows.length + (curr_page - 1) * conf.rtd); //tr id is the row number, includes quite a bit calculation because it takes pagination into account
      table.appendChild(tr);
      set_row_background_color(tr);
      row_events(tr);
      return tr;
    };

    const create_cell = (
      cell_num,
      cell_text,
      row_arr,
      header_row,
      tr,
      col_obj
    ) => {
      const cell = document.createElement("div");
      css(conf.style.cell, cell);
      if (screen.offsetWidth > 414) {
        css(conf.style.larger_width_cell, cell);
      }
      const row_num = rows_arr.length - 1;
      cell.innerText = cell_text;
      let td;
      //determine whether it is a header cell or not, and execute the corresponding code
      if (header_row) {
        td = document.createElement("th");
        cell.setAttribute("id", self.header_info[cell_num].name);
        css(["cursor: pointer;", "user-select: none;"], cell);

        const ascending_icon = document.createElement("img");
        ascending_icon.setAttribute("src", conf.icons.ascending);
        css(conf.style.header_cell_icons, ascending_icon);
        cell.appendChild(ascending_icon);

        const descending_icon = document.createElement("img");
        descending_icon.setAttribute("src", conf.icons.descending);
        css(conf.style.header_cell_icons, descending_icon);
        cell.appendChild(descending_icon);

        cell.addEventListener("click", function () {
          const header_row = table.rows[0].cells;
          for (let i = 0; i < header_row.length; i++) {
            const header_cell = header_row[i].children[0].children[0];
            if (this === header_cell) {
              self.sort_by = i;
              const sort_ord_asc = self.header_info[i].ascending;
              if (sort_ord_asc) {
                ascending_icon.style.visibility = "hidden";
                descending_icon.style.visibility = "visible";
                self.sortedBy_icon = descending_icon;
              } else {
                ascending_icon.style.visibility = "visible";
                descending_icon.style.visibility = "hidden";
                self.sortedBy_icon = ascending_icon;
              }
              self.header_info[i].ascending = !self.header_info[i].ascending;
            } else {
              self.header_info[i].ascending = false;
              //hide icons in other headers when a new header is clicked
              for (const icon of header_cell.children) {
                icon.style.visibility = "hidden";
              }
            }
          }
          filter_rows();
        });
        cell.addEventListener("mouseover", function () {
          //hide icons in active headers when a new header is hovered over
          self.sortedBy_icon;
          const header_row = table.rows[0].cells;
          for (let i = 0; i < header_row.length; i++) {
            const header_cell = header_row[i].children[0].children[0];
            for (const icon of header_cell.children) {
              if (icon.style.visibility === "visible") {
                self.sortedBy_icon = icon;
              }
              //if the cell the cursor is hovering over does NOT contain the currently visible icon
              if (!cell.contains(self.sortedBy_icon)) {
                icon.style.visibility = "hidden";
              }
            }
          }
          if (ascending_icon.style.visibility === "hidden") {
            ascending_icon.style.visibility = "visible";
            descending_icon.style.visibility = "hidden";
          } else {
            descending_icon.style.visibility = "visible";
            ascending_icon.style.visibility = "hidden";
          }
        });
        cell.addEventListener("mouseout", function () {
          const header_row = table.rows[0].cells;
          for (let i = 0; i < header_row.length; i++) {
            const header_cell = header_row[i].children[0].children[0];
            if (this === header_cell) {
              if (self.sort_by !== i) {
                //hide icon if its corresponding header cell has not been clicked
                ascending_icon.style.visibility = "hidden";
                descending_icon.style.visibility === "hidden";
              } else {
                //if the grid is sorted by the header the cursor just stopped hovering over AND there's a mismatch between the visible icon and the sort order
                if (
                  self.header_info[i].ascending &&
                  descending_icon.style.visibility === "visible"
                ) {
                  descending_icon.style.visibility = "hidden";
                  ascending_icon.style.visibility = "visible";
                } else if (
                  !self.header_info[i].ascending &&
                  ascending_icon.style.visibility === "visible"
                ) {
                  descending_icon.style.visibility = "visible";
                  ascending_icon.style.visibility = "hidden";
                }
              }
            }
          }
          if (typeof self.sortedBy_icon !== "undefined") {
            self.sortedBy_icon.style.visibility = "visible";
          }
        });
      } else {
        //add 'highlight' effect by adding <mark> tag around the substring
        const txt_content = cell_text.toLowerCase();
        const typed_text = search_bar.value.toLowerCase();
        const index = txt_content.indexOf(typed_text);

        if (
          (index > -1 && cell_num === sf_idx && typed_text !== "") ||
          (index > -1 && default_sf === "All" && typed_text !== "")
        ) {
          cell.innerHTML =
            cell_text.substring(0, index) +
            "<mark>" +
            cell_text.substring(index, index + typed_text.length) +
            "</mark>" +
            cell_text.substring(index + typed_text.length);
        }

        cell.setAttribute("id", conv_to_snakecase(cell_text.toString()));
        td = document.createElement("td");
        //add a click event listener to every cell inside the grid if corresponding schema ro property is false
        // if (!ord_ro_obj[cell_num]) {
        //   cell.addEventListener("click", function (event) {
        //     const row_num = extract_row_num(this.id);
        //     const curr_row = plugin_dom_obj.querySelectorAll("tr")[row_num];
        //     edit_mode.set_edit_row(curr_row);
        //     if (!edit_mode.get_mode() && event.ctrlKey) {
        //       // const row = edit_mode.get_edit_row();
        //       // add_inputs_to_row(this, row, row_num);
        //     }
        //   });
        // }
      }
      //set class attribute on td dom object and add right click event listeners to it
      // td.setAttribute("class", "column" + cell_num);
      //   td.addEventListener("contextmenu", function (event) {
      //     event.preventDefault();
      //     //make sure edit mode is not on and no other right click context menus exists before creating one
      //     if (
      //       !edit_mode.get_mode() &&
      //       plugin_dom_obj.querySelectorAll("#context_menu").length === 0
      //     ) {
      //       const context_menu = append_child(
      //         "div",
      //         plugin_dom_obj,
      //         "context_menu"
      //       );
      //       css(conf.style.context_menu, context_menu);
      //       context_menu.style.position = "absolute";
      //       context_menu.style.top = event.clientY + "px";
      //       context_menu.style.left = event.clientX + "px";

      //       const delete_opt = context_menu_opt("Delete Column", context_menu);
      //       delete_opt.addEventListener("click", function () {});

      //       const add_opt = context_menu_opt("Add Column", context_menu);

      //       // Remove the context menu when user clicks anywhere else
      //       window.addEventListener("click", function (e) {
      //         if (e.target !== context_menu) {
      //           plugin_dom_obj.removeChild(context_menu);
      //         }
      //       });
      //     }
      //     const col_cells = plugin_dom_obj.querySelectorAll("." + this.className);
      //   });

      //add more event listeners to cells
      cell_on_hov_events(td, cell, tr, row_arr);
      //return td for add_row function to use
      return td;
    };

    const context_menu_opt = function (text, parent_elem) {
      const opt = append_child("div", parent_elem);
      opt.innerText = text;
      css(conf.style.context_menu_opt, opt);

      opt.addEventListener("mouseover", function () {
        css(["background-color: #ddd;", "cursor: pointer"], this);
      });
      opt.addEventListener("mouseout", function () {
        css(["background-color: #fff"], this);
      });
      return opt;
    };

    const row_events = (row) => {
      row.addEventListener("mouseover", function () {
        if (!edit_mode.get_mode()) {
          css(conf.style.row_hov_color, this);
        }
      });
      row.addEventListener("mouseout", function () {
        if (!edit_mode.get_mode()) {
          reset_row_backgrounds(this);
        }
      });
    };

    const cell_on_hov_events = (td, cell, tr, row_arr) => {
      //initialize variables needed for displaying the text of cells that have been cut off
      let timeout;
      let cutoff_div;
      const cell_cont = append_child("div", td, "cell_cont");
      css(["border-right: 1px solid #ddd;"], cell_cont);
      cell_cont.appendChild(cell);

      //add a hover event listener to each table row that highlights the rows the cursor is hovering over
      cell.addEventListener("mouseover", function () {
        //check to see if the cell has hidden content and edit mode is off
        if (cell.scrollWidth > cell.clientWidth && !edit_mode.get_mode()) {
          timeout = setTimeout(function () {
            //make div appear here
            if (cutoff_div === undefined) {
              cutoff_div = append_child("div", cell_cont, "cutoff_div");
              cutoff_div.innerText = cell.innerText;
              css(conf.style.cutoff_div, cutoff_div);
            } else if (cutoff_div !== undefined) {
              cutoff_div.style.display = "";
            }
          }, 500);
        }
      });
      cell.addEventListener("mouseout", function () {
        //clear cutoff_div if it is visible
        if (cutoff_div !== undefined) {
          cutoff_div.style.display = "none";
        }

        //clear timeout variable if the mouse leaves before 1s of hover time is reached
        clearTimeout(timeout);
      });
    };

    const reset_row_backgrounds = (tr) => {
      //find out whether you should apply row color or alt color to row
      const all_TRs = plugin_dom_obj.querySelectorAll("table tr");
      let count = 0;
      for (let i = 0; i < all_TRs.length; i++) {
        if (tr === all_TRs[i] && i % 2 === 0) {
          css(conf.style.row_color, tr);
        } else if (tr === all_TRs[i] && i % 2 !== 0) {
          css(conf.style.alt_color, tr);
        }
      }
    };

    const are_arrays_eq = (arr1, arr2) => {
      if (arr1.length !== arr2.length) {
        return false;
      }

      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
      return true;
    };

    const conv_to_snakecase = (string) => {
      //if argument string > 1 word, make it snakecase
      if (string.includes(" ")) {
        string = string.replace(/ /g, "_");
      }
      return string;
    };

    const conv_to_Title_Case = (str) => {
      return str
        .replace(/(^\w)/g, (g) => g[0].toUpperCase())
        .replace(/([-_]\w)/g, (g) => " " + g[1].toUpperCase())
        .trim();
    };

    function handle_click(event) {}

    const modify_img_in_header = (header_id) => {
      //iterate through header row
      const header_row = table.rows[0];
      const target_cell = document.getElementById(header_id);
      for (let i = 0; i < header_row.cells.length; i++) {
        const header_cell = header_row.cells[i].childNodes[0].childNodes[0];
        const header_img =
          header_row.cells[i].childNodes[0].childNodes[0].childNodes[1];

        //modify the img_src
        if (header_cell === target_cell) {
          if (cols_ascending[header_id]) {
            header_img.setAttribute("src", conf.icons.descending);
          } else {
            header_img.setAttribute("src", conf.icons.ascending);
          }
          css(["opacity: 1"], header_img);
        } else {
          header_img.setAttribute("src", conf.icons.neutral);

          css(conf.style.header_img, header_img);
        }
      }
    };

    const compress_excess_cols = () => {
      excess_cols = [];
      const table_rows = table.rows;
      //add another condition that ensure cols continue being removed until there is no overlow in the header cells
      while (table_cont.scrollWidth > table_cont.clientWidth) {
        excess_cols.push([]);
        let col_num = excess_cols.length - 1;
        for (let i = 0; i < table_rows.length; i++) {
          const table_row = table_rows[i].cells;
          const last_visible_cell =
            table_row[table_row.length - excess_cols.length];

          //update table and local scope 'excess_cols' array
          last_visible_cell.style.display = "none";
          excess_cols[col_num].push(last_visible_cell);
          //rows_arr doesn't include bottom row headers, whilst table_rows does. Thus, check if rows_arr[i] is undefined
          const row_arr = rows_arr[i];
          if (row_arr !== undefined) {
            row_arr.pop();
          }
        }
      }
    };

    const collapsible_div = (row, collapsible_cell) => {};

    const create_grid = function () {
      create_header();
      table_cont = append_child("div", grid_container, "table_cont");
      table = append_child("table", table_cont, "table1");
      css(conf.style.table, table);
      create_footer();
    };

    const add_headers = (columns, schema) => {
      self.headers_arr = [];
      for (let i = 0; i < columns.length; i++) {
        const column = columns[i];
        const schem = schema[i];
        self.header_info[i] = {
          name: schem.name,
          type: schem.type,
          ascending: false,
        };
        const header = column.display;
        self.headers_arr.push(header);

        //add header to search_ddl
        const sddl_opt = append_child("option", self.search_ddl, header);
        sddl_opt.innerText = header;
      }

      // ord_ro_obj = {};
      // for (let i = 0; i < headers_ord.length; i++) {
      //   const focus_idx = headers_ord[i];
      //   let focus_schem;
      //   for (const schem of schema) {
      //     if (schem.ord == focus_idx) {
      //       ord_ro_obj[focus_idx] = schem.ro;
      //       ord_bind_obj[focus_idx] = schem.bind;
      //       ord_name_obj[focus_idx] = schem.name;
      //       break;
      //     }
      //   }
      // }

      add_row(self.headers_arr, true);
      tot_num_cols = self.headers_arr.length;
    };

    const pagination_active = (new_page) => {
      curr_page = new_page;
      first_entry_index = (new_page - 1) * conf.rtd;
      pag_tb.value = curr_page;
      filter_rows();
    };

    this.api = {
      load_grid: function () {
        conf.data_adapter.load(function (data) {
          num_of_pages = Math.ceil(data.rows.length / conf.rtd);
          add_headers(config.data_adapter.columns, data.schema);
          populate_table(data.rows);
          grid_mode.set(conf.grid_mode);
          load_grid_called = true; //this boolean variable is used to rearrange cols to match schema ord
          self.header_container.style.visibility = "visible";
          self.footer_container.style.visibility = "visible";
        });
        pag_tb.addEventListener("keydown", function (event) {
          if (event.key === "Enter") {
            error_handling();
          }
        });
        pag_tb.addEventListener("focus", function () {
          pag_tb.value = "";
        });

        next_butt.addEventListener("click", function () {
          if (curr_page != num_of_pages) {
            pagination_active(curr_page + 1);
          }
        });
        prev_butt.addEventListener("click", function () {
          if (curr_page != 1) {
            pagination_active(curr_page - 1);
          }
        });
        first_butt.addEventListener("click", function () {
          pagination_active(1);
        });
        last_butt.addEventListener("click", function () {
          pagination_active(num_of_pages);
        });
        try {
        } catch {
          alert(
            "Error, invalid data format. Look into plugin documentation for a reference of valid format."
          );
        }
      },
    };

    create_grid();
    return this;
  };
})(jQuery);
