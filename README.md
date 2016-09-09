# angular-form-help

Prototype of a future component.

##What does it do?
 
   Verify input errors and ng-form errors on submit ->
  
    if invalid, block submit, adds class to inputs and set $dirty to all invalids

##Usage example

```html
  <form data-ng-submit="vm.submit()" name="userForm" novalidate>
      <div class="form-group" ng-class="{ 'has-error' : userForm.name.$invalid && userForm.name.$dirty }">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="form-group">
            <label>name</label>
            <input type="text" name="name" data-ng-model="vm.name" data-ng-required="true" class="form-control">
          </div>
          <div data-ng-messages="userForm.name.$error" data-ng-if="userForm.name.$dirty">
            <div class="help-block" data-ng-message="required">Required</div>
          </div>
        </div>
      </div>
      
      <div class="form-group" ng-class="{ 'has-error' : userForm.secondName.$invalid && userForm.secondName.$dirty }">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="form-group">
              <label>Second names</label>
            <input type="text" name="secondName" data-ng-model="vm.secondName" data-ng-required="true" class="form-control">
          </div>
          <div data-ng-messages="userForm.secondName.$error" data-ng-if="userForm.secondName.$dirty">
            <div class="help-block" data-ng-message="required">Required</div>
          </div>
        </div>
      </div>
      
      <div class="form-group" ng-class="{ 'has-error' : userForm.email.$invalid && userForm.email.$dirty }">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="form-group">
              <label>Email</label>
            <input type="text" name="email" data-ng-model="vm.email" data-ng-required="true" class="form-control">
          </div>
          <div data-ng-messages="userForm.email.$error" data-ng-if="userForm.email.$dirty">
            <div class="help-block" data-ng-message="required">Required</div>
          </div>
        </div>
      </div>  
      <div class="col-xs-12 col-sm-3 col-md-2 form-group">
        <form-help-button btn-class="btn btn-success" label="Save"></form-help-button>
      </div>
    </form>
```

   
#[Demo](https://marcosflorencio.github.io/angular-form-help/)
