//
//  playground_iosApp.swift
//  playground_ios
//
//  Created by guobin on 2022/9/8.
//

import SwiftUI

@main
struct playground_iosApp: App {
    let persistenceController = PersistenceController.shared

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environment(\.managedObjectContext, persistenceController.container.viewContext)
        }
    }
}
