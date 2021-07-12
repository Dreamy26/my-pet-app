<template>
  <v-app>
    <v-main class="dogs-layout">
      <v-container fill-height>
        <div class="dogs-overlay">
          <h1 class="display-2 text-xs-center">Choose your favorite dogs</h1>
          <v-card class="dog-card">
            <v-img height="400px"></v-img>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>favorite</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>forward</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>
