import React, { useEffect, useRef } from "react";
import "./css/style.css";
import "./css/res.css";

// import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts.js";
import images from "./data/images.js";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const DashboardComponent = ({
  image1 = images.image1,
  marketingMetricLabel = texts.marketingMetricLabel,
  marketingMetricValue = texts.marketingMetricValue,
  marketingGrowthPercentage = texts.marketingGrowthPercentage,
  salesMetricLabel = texts.salesMetricLabel,
  salesMetricValue = texts.salesMetricValue,
  salesGrowthPercentage = texts.salesGrowthPercentage,
  humanResourcesMetricLabel = texts.humanResourcesMetricLabel,
  humanResourcesMetricValue = texts.humanResourcesMetricValue,
  humanResourcesGrowthPercentage = texts.humanResourcesGrowthPercentage,
  viewProfileText = texts.viewProfileText,
  dashboardMenuItemText = texts.dashboardMenuItemText,
  leadsMenuItemText = texts.leadsMenuItemText,
  analyticsMenuItemText = texts.analyticsMenuItemText,
  reportsMenuItemText = texts.reportsMenuItemText,
  userNameText = texts.userNameText,
  ezymetricsAppName = texts.ezymetricsAppName,
  leadsLegendLabel = texts.leadsLegendLabel,
  conversionsLegendLabel = texts.conversionsLegendLabel,
  MonthOptionText = texts.MonthOptionText,
  DaysOptionText = texts.DaysOptionText,
  leadTrendsTitle = texts.leadTrendsTitle,
  filterButtonLabel = texts.filterButtonLabel,
  exportButtonLabel = texts.exportButtonLabel,
  dashboardHeaderText = texts.dashboardHeaderText,
  leadsHeaderText = texts.leadsHeaderText,
  analyticsHeaderText = texts.analyticsHeaderText,
  leadNameInputPlaceholder = texts.leadNameInputPlaceholder,
  leadEmailInputPlaceholder = texts.leadEmailInputPlaceholder,
  leadPhoneInputPlaceholder = texts.leadPhoneInputPlaceholder,
  addLeadButtonText = texts.addLeadButtonText,
  editLeadButtonText = texts.editLeadButtonText,
  deleteLeadButtonText = texts.deleteLeadButtonText,
  leadIdColumnHeader = texts.leadIdColumnHeader,
  leadNameColumnHeader = texts.leadNameColumnHeader,
  statusColumnHeader = texts.statusColumnHeader,
  actionsColumnHeader = texts.actionsColumnHeader,
  firstLeadId = texts.firstLeadId,
  firstLeadName = texts.firstLeadName,
  firstLeadStatus = texts.firstLeadStatus,
  editButtonForFirstLead = texts.editButtonForFirstLead,
  secondLeadId = texts.secondLeadId,
  secondLeadName = texts.secondLeadName,
  secondLeadStatus = texts.secondLeadStatus,
  deleteButtonForSecondLead = texts.deleteButtonForSecondLead,
  thirdLeadId = texts.thirdLeadId,
  thirdLeadName = texts.thirdLeadName,
  thirdLeadStatus = texts.thirdLeadStatus,
  addNoteButtonForThirdLead = texts.addNoteButtonForThirdLead,
  MonthOptionText1 = texts.MonthOptionText1,
  DaysOptionText1 = texts.DaysOptionText1,
  q1LegendLabel = texts.q1LegendLabel,
  q2LegendLabel = texts.q2LegendLabel,
  q3LegendLabel = texts.q3LegendLabel,
  q4LegendLabel = texts.q4LegendLabel,
  salesGrowthTitle = texts.salesGrowthTitle,
  filterButtonLabel1 = texts.filterButtonLabel1,
  exportButtonLabel1 = texts.exportButtonLabel1,
}) => {
  return (
    <div className="wrapper-div-82">
      <div className="dashboard-container">
        {/* Container1 */}
        <section className="metrics-container pos-abs">
          <div className="marketing-metric-card pos-abs">
            <div className="up-arrow-icon pos-abs">
              <div className="up-arrow-group pos-abs">
                <div className="up-arrow-inner-group pos-abs">
                  <div className="up-arrow-inner-group-2 pos-abs">
                    <div className="up-arrow-vector pos-abs">
                      <div className="nodeBg-89 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="marketing-label pos-abs">
              <span className="marketing-label-1">{marketingMetricLabel}</span>
            </div>

            <div className="marketing-value pos-abs">
              <span className="marketing-value-1">{marketingMetricValue}</span>
            </div>

            <div className="marketing-percentage pos-abs">
              <span className="marketing-percentage-1">{marketingGrowthPercentage}</span>
            </div>

            <div className="marketing-chart-container pos-abs">
              <div className="marketing-chart-frame pos-abs">
                <div className="marketing-chart-inner-frame pos-abs">
                  <div className="marketing-chart-vector pos-abs">
                    <div className="nodeBg-816 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sales-metric-card pos-abs">
            <div className="up-arrow-icon-2 pos-abs">
              <div className="up-arrow-group-2 pos-abs">
                <div className="up-arrow-inner-group-3 pos-abs">
                  <div className="up-arrow-inner-group-4 pos-abs">
                    <div className="up-arrow-vector-2 pos-abs">
                      <div className="nodeBg-822 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sales-label pos-abs">
              <span className="sales-label-1">{salesMetricLabel}</span>
            </div>

            <div className="sales-value pos-abs">
              <span className="sales-value-1">{salesMetricValue}</span>
            </div>

            <div className="sales-percentage pos-abs">
              <span className="sales-percentage-1">{salesGrowthPercentage}</span>
            </div>

            <div className="sales-chart-container pos-abs">
              <div className="sales-chart pos-abs">
                <div className="sales-chart-background pos-abs"></div>

                <div className="sales-chart-foreground pos-abs"></div>
              </div>
            </div>
          </div>

          <div className="hr-metric-card pos-abs">
            <div className="up-arrow-icon-3 pos-abs">
              <div className="up-arrow-group-3 pos-abs">
                <div className="up-arrow-inner-group-5 pos-abs">
                  <div className="up-arrow-inner-group-6 pos-abs">
                    <div className="up-arrow-vector-3 pos-abs">
                      <div className="nodeBg-834 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hr-label pos-abs">
              <span className="hr-label-1">{humanResourcesMetricLabel}</span>
            </div>

            <div className="hr-value pos-abs">
              <span className="hr-value-1">{humanResourcesMetricValue}</span>
            </div>

            <div className="hr-percentage pos-abs">
              <span className="hr-percentage-1">{humanResourcesGrowthPercentage}</span>
            </div>

            <div className="hr-chart-container pos-abs">
              <div className="hr-chart-frame pos-abs">
                <div className="hr-chart-inner-frame pos-abs">
                  <div className="hr-chart-vector pos-abs">
                    <div className="nodeBg-841 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Container 11 */}
        <section className="sidebar-container pos-abs">
          <div className="user-avatar-container pos-abs">
            <div className="user-avatar-background pos-abs">
              <img
                src={`${image1}`}
                className="pos-abs image-div bg-no-repeat bg-crop nodeBg-844 "
                alt="844-ALT"
              />{" "}
            </div>

            <div className="user-avatar-frame pos-abs">
              <div className="user-avatar-text pos-abs"></div>
            </div>
          </div>

          <div className="view-profile-link pos-abs">
            <span className="view-profile-link-1">{viewProfileText}</span>
          </div>

          <div className="sidebar-menu-container pos-abs">
            <div className="dashboard-menu-item pos-abs">
              <div className="dashboard-menu-text pos-abs">
                <span className="dashboard-menu-text-1">{dashboardMenuItemText}</span>
              </div>

              <div className="dashboard-icon-container pos-abs">
                <div className="dashboard-icon pos-abs">
                  <div className="nodeBg-851 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>
            </div>

            <div className="leads-menu-item pos-abs">
              <div className="leads-menu-text pos-abs">
                <span className="leads-menu-text-1">{leadsMenuItemText}</span>
              </div>

              <div className="leads-icon-container pos-abs">
                <div className="leads-icon pos-abs">
                  <div className="nodeBg-855 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>
            </div>

            <div className="analytics-menu-item pos-abs">
              <div className="analytics-menu-text pos-abs">
                <span className="analytics-menu-text-1">{analyticsMenuItemText}</span>
              </div>

              <div className="analytics-icon-container pos-abs">
                <div className="analytics-icon pos-abs">
                  <div className="nodeBg-859 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>
            </div>

            <div className="reports-menu-item pos-abs">
              <div className="reports-menu-text pos-abs">
                <span className="reports-menu-text-1">{reportsMenuItemText}</span>
              </div>

              <div className="reports-icon-container pos-abs">
                <div className="reports-icon-vector-1 pos-abs">
                  <div className="nodeBg-863 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>

                <div className="reports-icon-vector-2 pos-abs">
                  <div className="nodeBg-864 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>

                <div className="reports-icon-vector-3 pos-abs">
                  <div className="nodeBg-865 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>
            </div>
          </div>

          <div className="settings-icon-container pos-abs">
            <div className="settings-icon-group pos-abs">
              <div className="settings-icon-inner-group pos-abs">
                <div className="settings-icon-center pos-abs">
                  <div className="settings-icon-center-vector pos-abs">
                    <div className="nodeBg-871 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>

                <div className="settings-icon-outer-group pos-abs">
                  <div className="settings-icon-outer-vector pos-abs">
                    <div className="nodeBg-873 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="user-name pos-abs">
            <span className="user-name-1">{userNameText}</span>
          </div>

          <div className="logo-container pos-abs">
            <div className="logo-group pos-abs">
              <div className="logo-inner-group pos-abs">
                <div className="logo-shape-group pos-abs">
                  <div className="logo-shape pos-abs">
                    <div className="logo-left-part pos-abs">
                      <div className="logo-left-vector pos-abs">
                        <div className="nodeBg-881 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                    </div>

                    <div className="logo-right-part pos-abs">
                      <div className="logo-right-vector pos-abs">
                        <div className="nodeBg-883 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                    </div>

                    <div className="logo-center-part pos-abs">
                      <div className="logo-center-vector pos-abs">
                        <div className="nodeBg-885 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="app-name pos-abs">
            <span className="app-name-1">{ezymetricsAppName}</span>
          </div>
        </section>
        {/* Container2 */}
        <section className="lead-trends-container pos-abs">
          <div className="lead-trends-inner-container pos-abs">
            <div className="lead-trends-chart pos-abs">
              <div className="chart-grid-lines pos-abs">
                <div className="chart-horizontal-line-1 pos-abs">
                  <div className="nodeBg-890 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>

                <div className="chart-horizontal-line-2 pos-abs">
                  <div className="nodeBg-891 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>

                <div className="chart-horizontal-line-3 pos-abs">
                  <div className="nodeBg-892 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>

                <div className="chart-horizontal-line-4 pos-abs">
                  <div className="nodeBg-893 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>

                <div className="chart-horizontal-line-5 pos-abs">
                  <div className="nodeBg-894 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>

              <div className="chart-data-container pos-abs">
                <div className="chart-data-group-1 pos-abs">
                  <div className="chart-data-line-1 pos-abs">
                    <div className="nodeBg-897 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>

                <div className="chart-data-group-2 pos-abs">
                  <div className="chart-data-line-2 pos-abs">
                    <div className="nodeBg-899 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>

              <div className="chart-legend pos-abs">
                <div className="leads-legend-item pos-abs">
                  <div className="leads-legend-color pos-abs"></div>

                  <div className="leads-legend-text pos-abs">
                    <span className="leads-legend-text-1">{leadsLegendLabel}</span>
                  </div>
                </div>

                <div className="conversions-legend-item pos-abs">
                  <div className="conversions-legend-color pos-abs"></div>

                  <div className="conversions-legend-text pos-abs">
                    <span className="conversions-legend-text-1">{conversionsLegendLabel}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="time-range-selector pos-abs">
              <div className="twelve-month-option pos-abs">
                <div className="twelve-month-text pos-abs">
                  <span className="twelve-month-text-1">{MonthOptionText}</span>
                </div>
              </div>

              <div className="thirty-day-option pos-abs">
                <div className="thirty-day-text pos-abs">
                  <span className="thirty-day-text-1">{DaysOptionText}</span>
                </div>
              </div>
            </div>

            <div className="lead-trends-title pos-abs">
              <span className="lead-trends-title-1">{leadTrendsTitle}</span>
            </div>

            <div className="filter-button pos-abs">
              <div className="filter-button-text pos-abs">
                <span className="filter-button-text-1">{filterButtonLabel}</span>
              </div>

              <div className="filter-icon-container pos-abs">
                <div className="filter-icon pos-abs">
                  <div className="nodeBg-8113 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>
            </div>

            <div className="export-button pos-abs">
              <div className="export-button-text pos-abs">
                <span className="export-button-text-1">{exportButtonLabel}</span>
              </div>

              <div className="export-icon-container pos-abs">
                <div className="export-icon-line pos-abs">
                  <div className="nodeBg-8117 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>

                <div className="export-icon-arrow-base pos-abs">
                  <div className="nodeBg-8118 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>

                <div className="export-icon-arrow pos-abs">
                  <div className="nodeBg-8119 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Container3 */}
        <section className="empty-container pos-abs"></section>
        {/* Container4 */}
        <section className="header-container pos-abs">
          <div className="header-menu pos-abs">
            <div className="dashboard-header-item pos-abs">
              <div className="dashboard-header-underline pos-abs"></div>

              <div className="dashboard-header-text pos-abs">
                <span className="dashboard-header-text-1">{dashboardHeaderText}</span>
              </div>
            </div>

            <div className="leads-header-item pos-abs">
              <div className="leads-header-text pos-abs">
                <span className="leads-header-text-1">{leadsHeaderText}</span>
              </div>
            </div>

            <div className="analytics-header-item pos-abs">
              <div className="analytics-header-text pos-abs">
                <span className="analytics-header-text-1">{analyticsHeaderText}</span>
              </div>
            </div>
          </div>
        </section>
        {/* Container5 */}
        <section className="lead-management-container pos-abs">
          <div className="lead-name-input pos-abs">
            <div className="lead-name-placeholder pos-abs">
              <span className="lead-name-placeholder-1">{leadNameInputPlaceholder}</span>
            </div>
          </div>

          <div className="lead-email-input pos-abs">
            <div className="lead-email-placeholder pos-abs">
              <span className="lead-email-placeholder-1">{leadEmailInputPlaceholder}</span>
            </div>
          </div>

          <div className="lead-phone-input pos-abs">
            <div className="lead-phone-placeholder pos-abs">
              <span className="lead-phone-placeholder-1">{leadPhoneInputPlaceholder}</span>
            </div>
          </div>

          <div className="add-lead-button pos-abs">
            <div className="add-lead-text pos-abs">
              <span className="add-lead-text-1">{addLeadButtonText}</span>
            </div>
          </div>

          <div className="edit-lead-button pos-abs">
            <div className="edit-lead-text pos-abs">
              <span className="edit-lead-text-1">{editLeadButtonText}</span>
            </div>
          </div>

          <div className="delete-lead-button pos-abs">
            <div className="delete-lead-text pos-abs">
              <span className="delete-lead-text-1">{deleteLeadButtonText}</span>
            </div>
          </div>

          <div className="leads-table pos-abs">
            <div className="table-header pos-abs">
              <div className="lead-id-header pos-abs">
                <div className="lead-id-header-text pos-abs">
                  <span className="lead-id-header-text-1">{leadIdColumnHeader}</span>
                </div>
              </div>

              <div className="lead-name-header pos-abs">
                <div className="lead-name-header-text pos-abs">
                  <span className="lead-name-header-text-1">{leadNameColumnHeader}</span>
                </div>
              </div>

              <div className="lead-status-header pos-abs">
                <div className="lead-status-header-text pos-abs">
                  <span className="lead-status-header-text-1">{statusColumnHeader}</span>
                </div>
              </div>

              <div className="lead-actions-header pos-abs">
                <div className="lead-actions-header-text pos-abs">
                  <span className="lead-actions-header-text-1">{actionsColumnHeader}</span>
                </div>
              </div>
            </div>

            <div className="lead-row-1 pos-abs">
              <div className="lead-id-cell-1 pos-abs">
                <div className="lead-id-1 pos-abs">
                  <span className="lead-id-1-1">{firstLeadId}</span>
                </div>
              </div>

              <div className="lead-name-cell-1 pos-abs">
                <div className="lead-name-1 pos-abs">
                  <span className="lead-name-1-1">{firstLeadName}</span>
                </div>
              </div>

              <div className="lead-status-cell-1 pos-abs">
                <div className="lead-status-1 pos-abs">
                  <span className="lead-status-1-1">{firstLeadStatus}</span>
                </div>
              </div>

              <div className="lead-actions-cell-1 pos-abs">
                <div className="edit-lead-button-1 pos-abs">
                  <div className="edit-lead-text-1 pos-abs">
                    <span className="edit-lead-text-1-1">{editButtonForFirstLead}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lead-row-2 pos-abs">
              <div className="lead-id-cell-2 pos-abs">
                <div className="lead-id-2 pos-abs">
                  <span className="lead-id-2-1">{secondLeadId}</span>
                </div>
              </div>

              <div className="lead-name-cell-2 pos-abs">
                <div className="lead-name-2 pos-abs">
                  <span className="lead-name-2-1">{secondLeadName}</span>
                </div>
              </div>

              <div className="lead-status-cell-2 pos-abs">
                <div className="lead-status-2 pos-abs">
                  <span className="lead-status-2-1">{secondLeadStatus}</span>
                </div>
              </div>

              <div className="lead-actions-cell-2 pos-abs">
                <div className="delete-lead-button-2 pos-abs">
                  <div className="delete-lead-text-2 pos-abs">
                    <span className="delete-lead-text-2-1">{deleteButtonForSecondLead}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lead-row-3 pos-abs">
              <div className="lead-id-cell-3 pos-abs">
                <div className="lead-id-3 pos-abs">
                  <span className="lead-id-3-1">{thirdLeadId}</span>
                </div>
              </div>

              <div className="lead-name-cell-3 pos-abs">
                <div className="lead-name-3 pos-abs">
                  <span className="lead-name-3-1">{thirdLeadName}</span>
                </div>
              </div>

              <div className="lead-status-cell-3 pos-abs">
                <div className="lead-status-3 pos-abs">
                  <span className="lead-status-3-1">{thirdLeadStatus}</span>
                </div>
              </div>

              <div className="lead-actions-cell-3 pos-abs">
                <div className="add-note-button-3 pos-abs">
                  <div className="add-note-text-3 pos-abs">
                    <span className="add-note-text-3-1">{addNoteButtonForThirdLead}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Container6 */}
        <section className="sales-growth-container pos-abs">
          <div className="sales-growth-inner-container pos-abs">
            <div className="sales-growth-time-range pos-abs">
              <div className="twelve-month-option-2 pos-abs">
                <div className="twelve-month-text-2 pos-abs">
                  <span className="twelve-month-text-2-1">{MonthOptionText1}</span>
                </div>
              </div>

              <div className="thirty-day-option-2 pos-abs">
                <div className="thirty-day-text-2 pos-abs">
                  <span className="thirty-day-text-2-1">{DaysOptionText1}</span>
                </div>
              </div>
            </div>

            <div className="sales-growth-chart pos-abs">
              <div className="sales-chart-grid-lines pos-abs">
                <div className="sales-chart-horizontal-line-1 pos-abs">
                  <div className="nodeBg-8193 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>

                <div className="sales-chart-horizontal-line-2 pos-abs">
                  <div className="nodeBg-8194 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>

                <div className="sales-chart-horizontal-line-3 pos-abs">
                  <div className="nodeBg-8195 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>

                <div className="sales-chart-horizontal-line-4 pos-abs">
                  <div className="nodeBg-8196 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>

                <div className="sales-chart-horizontal-line-5 pos-abs">
                  <div className="nodeBg-8197 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>

              <div className="sales-chart-bars pos-abs">
                <div className="sales-chart-bar-1 pos-abs"></div>

                <div className="sales-chart-bar-2 pos-abs"></div>

                <div className="sales-chart-bar-3 pos-abs"></div>

                <div className="sales-chart-bar-4 pos-abs"></div>

                <div className="sales-chart-bar-5 pos-abs"></div>

                <div className="sales-chart-bar-6 pos-abs"></div>

                <div className="sales-chart-bar-7 pos-abs"></div>

                <div className="sales-chart-bar-8 pos-abs"></div>

                <div className="sales-chart-bar-9 pos-abs"></div>

                <div className="sales-chart-bar-10 pos-abs"></div>

                <div className="sales-chart-bar-11 pos-abs"></div>

                <div className="sales-chart-bar-12 pos-abs"></div>

                <div className="sales-chart-bar-13 pos-abs"></div>

                <div className="sales-chart-bar-14 pos-abs"></div>

                <div className="sales-chart-bar-15 pos-abs"></div>

                <div className="sales-chart-bar-16 pos-abs"></div>
              </div>

              <div className="sales-chart-legend pos-abs">
                <div className="q1-legend-item pos-abs">
                  <div className="q1-legend-color pos-abs"></div>

                  <div className="q1-legend-text pos-abs">
                    <span className="q1-legend-text-1">{q1LegendLabel}</span>
                  </div>
                </div>

                <div className="q2-legend-item pos-abs">
                  <div className="q2-legend-color pos-abs"></div>

                  <div className="q2-legend-text pos-abs">
                    <span className="q2-legend-text-1">{q2LegendLabel}</span>
                  </div>
                </div>

                <div className="q3-legend-item pos-abs">
                  <div className="q3-legend-color pos-abs"></div>

                  <div className="q3-legend-text pos-abs">
                    <span className="q3-legend-text-1">{q3LegendLabel}</span>
                  </div>
                </div>

                <div className="q4-legend-item pos-abs">
                  <div className="q4-legend-color pos-abs"></div>

                  <div className="q4-legend-text pos-abs">
                    <span className="q4-legend-text-1">{q4LegendLabel}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="sales-growth-title pos-abs">
              <span className="sales-growth-title-1">{salesGrowthTitle}</span>
            </div>

            <div className="sales-filter-button pos-abs">
              <div className="sales-filter-text pos-abs">
                <span className="sales-filter-text-1">{filterButtonLabel1}</span>
              </div>

              <div className="sales-filter-icon-container pos-abs">
                <div className="sales-filter-icon pos-abs">
                  <div className="nodeBg-8226 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>
            </div>

            <div className="sales-export-button pos-abs">
              <div className="sales-export-text pos-abs">
                <span className="sales-export-text-1">{exportButtonLabel1}</span>
              </div>

              <div className="sales-export-icon-container pos-abs">
                <div className="sales-export-icon-line pos-abs">
                  <div className="nodeBg-8230 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>

                <div className="sales-export-icon-arrow-base pos-abs">
                  <div className="nodeBg-8231 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>

                <div className="sales-export-icon-arrow pos-abs">
                  <div className="nodeBg-8232 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default DashboardComponent;
