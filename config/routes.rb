Rails.application.routes.draw do
  get '/', to: "registrations#new"
end
